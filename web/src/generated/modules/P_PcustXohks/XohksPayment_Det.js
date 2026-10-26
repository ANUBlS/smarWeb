// Generated from XohksPayment_Det.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("XohksPayment_Det", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "DBCtrls", "CurrencyEdit", "Buttons", "XFSCtrls", "ExtCtrls", "SearchEdit", "DataXohks", "TransType_Unit", "XohksMain", "MainXhoksFormImpl", "sboapiDataModuleImpl", "Get_to_shablonunit"]);
  const C = [U];
  U.defClass("TFormPayment_Det", "TForm", {"xfgroupbox1": {"name": "XFGroupBox1", "type": "TXFGroupBox"}, "xfpanel13": {"name": "XFPanel13", "type": "TXFPanel"}, "xfgroupbox3": {"name": "XFGroupBox3", "type": "TXFGroupBox"}, "xfgroupbox5": {"name": "XFGroupBox5", "type": "TXFGroupBox"}, "xfpanel21": {"name": "XFPanel21", "type": "TXFPanel"}, "xfpanel22": {"name": "XFPanel22", "type": "TXFPanel"}, "xfpanel25": {"name": "XFPanel25", "type": "TXFPanel"}, "xfpanel26": {"name": "XFPanel26", "type": "TXFPanel"}, "xfpanel12": {"name": "XFPanel12", "type": "TXFPanel"}, "xfpanel28": {"name": "XFPanel28", "type": "TXFPanel"}, "xfpanel33": {"name": "XFPanel33", "type": "TXFPanel"}, "xfgroupbox2": {"name": "XFGroupBox2", "type": "TXFGroupBox"}, "xfpanel1": {"name": "XFPanel1", "type": "TXFPanel"}, "xfpanel2": {"name": "XFPanel2", "type": "TXFPanel"}, "xfpanel3": {"name": "XFPanel3", "type": "TXFPanel"}, "xfpanel4": {"name": "XFPanel4", "type": "TXFPanel"}, "xfpanel5": {"name": "XFPanel5", "type": "TXFPanel"}, "xfpanel6": {"name": "XFPanel6", "type": "TXFPanel"}, "xfgroupbox4": {"name": "XFGroupBox4", "type": "TXFGroupBox"}, "xfpanel8": {"name": "XFPanel8", "type": "TXFPanel"}, "xfpanel9": {"name": "XFPanel9", "type": "TXFPanel"}, "xfpanel11": {"name": "XFPanel11", "type": "TXFPanel"}, "xfpanel10": {"name": "XFPanel10", "type": "TXFPanel"}, "xfpanel23": {"name": "XFPanel23", "type": "TXFPanel"}, "xfbitbtn1": {"name": "XFBitBtn1", "type": "TXFBitBtn"}, "edit_bankname_self": {"name": "Edit_BankName_Self", "type": "TEdit"}, "edit_bankcode_self": {"name": "Edit_BankCode_Self", "type": "TEdit"}, "edit_account_self": {"name": "Edit_account_Self", "type": "TEdit"}, "edit_voen_self": {"name": "Edit_Voen_Self", "type": "TEdit"}, "edit_account_sub_self": {"name": "Edit_account_sub_Self", "type": "TEdit"}, "edit_bik_self": {"name": "Edit_BIK_Self", "type": "TEdit"}, "edit_referens": {"name": "Edit_Referens", "type": "TEdit"}, "speedbutton2": {"name": "SpeedButton2", "type": "TSpeedButton"}, "combo_valute": {"name": "Combo_Valute", "type": "TComboBox"}, "edit_amount": {"name": "Edit_amount", "type": "TCurrencyEdit"}, "edit_transcode": {"name": "Edit_TransCode", "type": "TEdit"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "xfbitbtn2": {"name": "XFBitBtn2", "type": "TXFBitBtn"}, "xfbitbtn3": {"name": "XFBitBtn3", "type": "TXFBitBtn"}, "xfpanel7": {"name": "XFPanel7", "type": "TXFPanel"}, "xfpanel14": {"name": "XFPanel14", "type": "TXFPanel"}, "xfpanel15": {"name": "XFPanel15", "type": "TXFPanel"}, "xfpanel16": {"name": "XFPanel16", "type": "TXFPanel"}, "xfpanel17": {"name": "XFPanel17", "type": "TXFPanel"}, "xfpanel18": {"name": "XFPanel18", "type": "TXFPanel"}, "xfpanel19": {"name": "XFPanel19", "type": "TXFPanel"}, "combo_bankname": {"name": "Combo_BankName", "type": "TComboBox"}, "bank_id": {"name": "Bank_ID", "type": "TListBox"}, "edit_bankcode": {"name": "Edit_BankCode", "type": "TEdit"}, "edit_account": {"name": "Edit_account", "type": "TEdit"}, "edit_voen": {"name": "Edit_Voen", "type": "TEdit"}, "edit_account_sub": {"name": "Edit_Account_Sub", "type": "TEdit"}, "edit_bik": {"name": "Edit_Bik", "type": "TEdit"}, "edit_client_name": {"name": "Edit_Client_Name", "type": "TEdit"}, "edit_client_code": {"name": "Edit_Client_Code", "type": "TEdit"}, "edit_client_voen": {"name": "Edit_Client_Voen", "type": "TEdit"}, "xfgroupbox6": {"name": "XFGroupBox6", "type": "TXFGroupBox"}, "xfgroupbox7": {"name": "XFGroupBox7", "type": "TXFGroupBox"}, "edit_tey1": {"name": "Edit_tey1", "type": "TEdit"}, "edit_tey2": {"name": "Edit_tey2", "type": "TEdit"}, "dbcombobox_budgetlevel": {"name": "DBComboBox_BudgetLevel", "type": "TDBLookupComboBox"}, "dbcombobox_destination": {"name": "DBComboBox_Destination", "type": "TDBLookupComboBox"}, "edit_tey3": {"name": "Edit_tey3", "type": "TEdit"}, "edit_tey4": {"name": "Edit_tey4", "type": "TEdit"}, "edit_inf1": {"name": "Edit_inf1", "type": "TEdit"}, "edit_inf2": {"name": "Edit_inf2", "type": "TEdit"}, "edit_inf3": {"name": "Edit_inf3", "type": "TEdit"}, "xfgroupbox8": {"name": "XFGroupBox8", "type": "TXFGroupBox"}, "xfbitbtn4": {"name": "XFBitBtn4", "type": "TXFBitBtn"}, "buttonfinish": {"name": "ButtonFinish", "type": "TXFBitBtn"}, "xfbitbtn6": {"name": "XFBitBtn6", "type": "TXFBitBtn"}, "xfbitbtn7": {"name": "XFBitBtn7", "type": "TXFBitBtn"}, "rb_102": {"name": "RB_102", "type": "TRadioButton"}, "rb_102t": {"name": "RB_102T", "type": "TRadioButton"}, "edit_client_acc_no": {"name": "Edit_Client_acc_no", "type": "TEdit"}, "searchbankm": {"name": "SearchBankM", "type": "TSearchEdit"}, "dbcombobox_institution": {"name": "DBComboBox_Institution", "type": "TDBLookupComboBox"}, "valute_id": {"name": "Valute_ID", "type": "TListBox"}, "bnf_count": {"name": "bnf_count", "type": "integer"}}, {});
  U.init(async () => {
    U.var_("FormPayment_Det", null, "TFormPayment_Det");
    U.var_("insert_shablon", $.sarr(), "array");
  });
  U.func("CheckField", async function CheckField(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: false, "i": 0};
  if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "FormPayment_Det")), "Edit_Referens")), "Text"))])), "")), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "FormPayment_Det")), "Edit_Amount")), "Value")), 0)))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "FormPayment_Det")), "Edit_TransCode")), "Text"))])), "")))), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "FormPayment_Det")), "Combo_BankName")), "ItemIndex")), (-(1)))))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "FormPayment_Det")), "Edit_BankCode")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "FormPayment_Det")), "Edit_account")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "FormPayment_Det")), "Edit_Voen")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "FormPayment_Det")), "Edit_Account_Sub")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "FormPayment_Det")), "Edit_Bik")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "FormPayment_Det")), "Edit_Client_acc_no")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "FormPayment_Det")), "Edit_Client_Name")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "FormPayment_Det")), "Edit_Client_Voen")), "Text"))])), "")))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "FormPayment_Det")), "Edit_tey1")), "Text"))])), "")))))) {
    L0["result"] = false;
    await $.stmt((await $.call(C, "MessageDlg", ["Melumat Tam deyil !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
    return L0.result;
  } else {
    L0["result"] = true;
  }
  {
    const $t1 = (await $.v(C, "FormPayment_Det"));
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
  U.method("TFormPayment_Det", "ButtonFinishClick", async function ButtonFinishClick(Self, p0) {
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
    if ($.truthy((await $.or_(($.eq((await $.v(C, "checkfield")), false)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "fieldbyname", ["status"])), "AsInteger")), 2)))))) {
      return L0.result;
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "Callprocedure", ["xs_Beneficiary_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "fieldbyname", ["ID"])), "AsInteger")), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.v(C, "Bank_ID")), "Items")), [(await $.mv((await $.v(C, "Combo_BankName")), "itemindex"))]))])), (await $.mv((await $.v(C, "Edit_Account_Sub")), "text")), (await $.mv((await $.v(C, "Edit_Client_acc_no")), "text")), (await $.mv((await $.v(C, "edit_client_name")), "text")), (await $.mv((await $.v(C, "edit_client_code")), "text")), (await $.mv((await $.v(C, "Edit_Client_Voen")), "text")), $.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.v(C, "edit_tey1")), "text")), "|"), (await $.mv((await $.v(C, "edit_tey2")), "text"))), "|"), (await $.mv((await $.v(C, "edit_tey3")), "text"))), "|"), (await $.mv((await $.v(C, "Edit_tey4")), "Text"))), "|"), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Edit_TransCode")), "text"))])), $.add($.add($.add($.add($.add((await $.mv((await $.v(C, "edit_inf1")), "text")), "|"), (await $.mv((await $.v(C, "edit_inf2")), "text"))), "|"), (await $.mv((await $.v(C, "edit_inf3")), "text"))), "|"), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.v(C, "valute_id")), "items")), [(await $.mv((await $.v(C, "combo_valute")), "itemindex"))]))])), (await $.mv((await $.v(C, "edit_referens")), "text")), (await $.mv((await $.v(C, "Edit_Amount")), "value")), (await $.v(C, "bnf_count"))]])));
    await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "Callprocedure", ["xs_BatchAmount_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "asinteger"))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "Callprocedure", ["xs_format_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "asinteger")), L0["format"]]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "callprocedure", ["xs_beneficiary_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "callintegerfunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "RefreshRecord", []);
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "RefreshRecord", []);
  } else {
    if ($.truthy($.eq((await $.v(C, "CheckField")), false))) {
      return L0.result;
    }
    await $.mcall((await $.v(C, "XFBitBtn4")), "Click", []);
  }
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayment_Det", "Combo_BankNameChange", async function Combo_BankNameChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "tempstr": ''};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankM")), "Locate", ["ID", (await $.idx((await $.mv((await $.v(C, "Bank_ID")), "Items")), [(await $.mv((await $.v(C, "Combo_BankName")), "ItemIndex"))])), []])));
  await $.mset((await $.v(C, "Bank_ID")), "ItemIndex", (await $.mv((await $.v(C, "Combo_BankName")), "ItemIndex")));
  await $.mset((await $.v(C, "Edit_BankCode")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankM")), "fieldbyname", ["BankCode"])), "AsString")));
  await $.mset((await $.v(C, "Edit_account")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankM")), "fieldbyname", ["KRNO"])), "AsString")));
  await $.mset((await $.v(C, "Edit_Voen")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankM")), "fieldbyname", ["INN"])), "AsString")));
  await $.mset((await $.v(C, "Edit_Bik")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankM")), "fieldbyname", ["SWIFT"])), "AsString")));
  L0["tempstr"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankM")), "fieldbyname", ["KRNO"])), "AsString"));
  await $.mset((await $.v(C, "Edit_Account_Sub")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankM")), "fieldbyname", ["SUBKRNO"])), "AsString")));
  if ($.truthy((await $.v(C, "mess_edit")))) {
    await $.mset((await $.v(C, "XFBitBtn6")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayment_Det", "Combo_BankNameKeyPress", async function Combo_BankNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormPayment_Det", "Edit_account_sub_SelfKeyPress", async function Edit_account_sub_SelfKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.mcall((await $.v(C, "MainXohksForm")), "OnlyNumber", [(await L0["key"].get())])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormPayment_Det", "Edit_amountEnter", async function Edit_amountEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_amount")), "Text")), "0"))) {
    await $.mcall((await $.v(C, "Edit_amount")), "Clear", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayment_Det", "Edit_amountExit", async function Edit_amountExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit_amount")), "Text")), ""))) {
    await $.mset((await $.v(C, "Edit_amount")), "Text", "0");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayment_Det", "Edit_BankName_SelfChange", async function Edit_BankName_SelfChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "mess_edit")))) {
    await $.mset((await $.v(C, "ButtonFinish")), "Enabled", true);
    await $.mset((await $.v(C, "XFBitBtn6")), "Enabled", true);
  }
  if ($.truthy($.eq((await $.call(C, "Length", [(await $.mv((L0["sender"]), "text"))])), 35))) {
    if ($.truthy((await $.mv((await $.v(C, "FormPayment_Det")), "Visible")))) {
      await $.mcall((await $.call(C, "FindNextControl", [(L0["sender"]), true, false, false])), "SetFocus", []);
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayment_Det", "Edit_Client_acc_noKeyPress", async function Edit_Client_acc_noKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(((await $.or_(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ...$.range("a","z"), ...$.range("A","Z"), "/", "-", ":", "(", ")", ".", ",", "'", "+", "{", "}", " ", "\b"])))), async () => ($.eq((await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text")), "/"))))), async () => ($.ne((await L0["key"].get()), "\b")))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormPayment_Det", "Edit_Client_CodeKeyPress", async function Edit_Client_CodeKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(((await $.or_(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ...$.range("a","z"), ...$.range("A","Z"), "/", "-", ":", "(", ")", ".", ",", "'", "+", "{", "}", " ", "\b"])))), async () => ($.eq((await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text")), "/"))))), async () => ($.ne((await L0["key"].get()), "\b")))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormPayment_Det", "Edit_Client_NameKeyPress", async function Edit_Client_NameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(((await $.or_(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ...$.range("a","z"), ...$.range("A","Z"), "/", "-", ":", "(", ")", ".", ",", "'", "+", "{", "}", " ", "\b"])))), async () => ($.eq((await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text")), "/"))))), async () => ($.ne((await L0["key"].get()), "\b")))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormPayment_Det", "Edit_Client_VoenKeyPress", async function Edit_Client_VoenKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(((await $.or_(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ...$.range("a","z"), ...$.range("A","Z"), "/", "-", ":", "(", ")", ".", ",", "'", "+", "{", "}", " ", "\b"])))), async () => ($.eq((await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text")), "/"))))), async () => ($.ne((await L0["key"].get()), "\b")))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormPayment_Det", "Edit_ReferensKeyPress", async function Edit_ReferensKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  { const $t4 = (await L0["key"].get());
    if ($.inRange($t4, "A", "H")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.inRange($t4, "J", "Z")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.inRange($t4, "a", "h")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.inRange($t4, "j", "z")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t4, "Ə")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t4, "Ü")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t4, "Ö")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t4, "Ğ")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t4, "Ş")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t4, "Ç")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t4, "İ")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t4, "I")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t4, "ə")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t4, "ü")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t4, "ö")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t4, "ğ")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t4, "ş")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t4, "ç")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t4, "i")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t4, "ı")) {
      await L0["key"].set("I");
    }
    else if ($.inRange($t4, "0", "9")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t4, "/") || $.eq($t4, "-") || $.eq($t4, ":") || $.eq($t4, "(") || $.eq($t4, ")") || $.eq($t4, ".") || $.eq($t4, ",") || $.eq($t4, "'") || $.eq($t4, "+") || $.eq($t4, "{") || $.eq($t4, "}") || $.eq($t4, " ")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else if ($.eq($t4, "\b")) {
      await L0["key"].set((await L0["key"].get()));
    }
    else {
      await L0["key"].set("\u0000");
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormPayment_Det", "FormCanResize", async function FormCanResize(Self, p0, p1, p2, p3) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "newwidth": $.asRef(p1), "newheight": $.asRef(p2), "resize": $.asRef(p3), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["resize"].set(false);
  return L0.result;
}, {"params": ["Sender", "NewWidth", "NewHeight", "Resize"], "kind": "procedure", "ptypes": ["TObject", "Integer", "Integer", "Boolean"]});
  U.method("TFormPayment_Det", "RB_102Click", async function RB_102Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "RB_102")), "Checked")))) {
    await $.mset((await $.v(C, "XFBitBtn2")), "Visible", true);
    await $.mset((await $.v(C, "XFBitBtn3")), "Visible", true);
    await $.mset((await $.v(C, "DBComboBox_Institution")), "Visible", false);
    await $.mset((await $.v(C, "DBComboBox_BudgetLevel")), "Visible", false);
    await $.mset((await $.v(C, "DBComboBox_Destination")), "Visible", false);
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Institution")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_BudgetLevel")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_Destination")), "Close", []);
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
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "DataBankM")), "Filter", "");
    await $.mset((await $.mv((await $.v(C, "DataModXhoks")), "DataBankM")), "Filtered", false);
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankM")), "Refresh", []);
    await $.mset((await $.v(C, "SearchBankM")), "Enabled", true);
    await $.mset((await $.v(C, "Combo_BankName")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayment_Det", "SearchBankMChange", async function SearchBankMChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "SearchBankM")), "Color")), (await $.v(C, "clred")))), async () => ($.ne((await $.mv((await $.v(C, "SearchBankM")), "Text")), "")))))) {
    await $.mset((await $.v(C, "Combo_BankName")), "ItemIndex", (await $.mcall((await $.mv((await $.v(C, "Bank_ID")), "Items")), "IndexOf", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "DataBankM")), "fieldbyname", ["id"])), "asstring"))])));
    await $.stmt((await $.mcall((await $.v(C, "Combo_BankName")), "OnChange", [Self])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayment_Det", "SearchBankMExit", async function SearchBankMExit(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "SearchBankM")), "Clear", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayment_Det", "SpeedButton1Click", async function SpeedButton1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "TransCodeForm")), "typecode", 0);
  await $.mset((await $.v(C, "TransCodeForm")), "typetext", "");
  { const $t5 = $.sub((await $.mv((await $.mv((await $.mv((await $.v(C, "TransCodeForm")), "TreeView1")), "Items")), "Count")), 1);
    L0["i"] = 0;
    let $t6 = true;
    for (;;) {
      if (!$t6) { L0["i"] = $.succ(L0["i"], 1); }
      $t6 = false;
      if (!($.ord(L0["i"]) <= $.ord($t5))) break;
      await $.mset((await $.idx((await $.mv((await $.mv((await $.v(C, "TransCodeForm")), "TreeView1")), "Items")), [L0["i"]])), "Expanded", false);
      await $.tick();
    }
  }
  await $.mcall((await $.v(C, "TransCodeForm")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayment_Det", "SpeedButton2Click", async function SpeedButton2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFBitBtn2")), "Enabled", true);
  await $.mset((await $.mv((await $.v(C, "FormPayment_Det")), "Edit_Referens")), "Text", (await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "CallStringFunction", ["GetNewBeneficiaryReference", []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayment_Det", "XFBitBtn2Click", async function XFBitBtn2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "XFBitBtn2")), "Enabled", false);
  { const $t7 = await $.iset((await $.v(C, "insert_shablon")), [1], (await $.call(C, "StringReplace", [(await $.call(C, "trim", [(await $.mv((await $.v(C, "Edit_amount")), "Text"))])), ",", "", [(await $.v(C, "rfReplaceAll")), (await $.v(C, "rfIgnoreCase"))]]))); if ($t7 !== undefined) { await $.set(C, "insert_shablon", $t7); } }
  { const $t8 = await $.iset((await $.v(C, "insert_shablon")), [2], (await $.mv((await $.v(C, "Edit_TransCode")), "Text"))); if ($t8 !== undefined) { await $.set(C, "insert_shablon", $t8); } }
  { const $t9 = await $.iset((await $.v(C, "insert_shablon")), [3], (await $.mv((await $.v(C, "Combo_BankName")), "Text"))); if ($t9 !== undefined) { await $.set(C, "insert_shablon", $t9); } }
  { const $t10 = await $.iset((await $.v(C, "insert_shablon")), [4], (await $.mv((await $.v(C, "Edit_Client_acc_no")), "Text"))); if ($t10 !== undefined) { await $.set(C, "insert_shablon", $t10); } }
  { const $t11 = await $.iset((await $.v(C, "insert_shablon")), [5], (await $.mv((await $.v(C, "Edit_Client_Name")), "Text"))); if ($t11 !== undefined) { await $.set(C, "insert_shablon", $t11); } }
  { const $t12 = await $.iset((await $.v(C, "insert_shablon")), [6], (await $.mv((await $.v(C, "Edit_Client_Code")), "Text"))); if ($t12 !== undefined) { await $.set(C, "insert_shablon", $t12); } }
  { const $t13 = await $.iset((await $.v(C, "insert_shablon")), [7], (await $.mv((await $.v(C, "Edit_Client_Voen")), "Text"))); if ($t13 !== undefined) { await $.set(C, "insert_shablon", $t13); } }
  { const $t14 = await $.iset((await $.v(C, "insert_shablon")), [8], (await $.mv((await $.v(C, "Edit_tey1")), "Text"))); if ($t14 !== undefined) { await $.set(C, "insert_shablon", $t14); } }
  { const $t15 = await $.iset((await $.v(C, "insert_shablon")), [9], (await $.mv((await $.v(C, "Edit_tey2")), "Text"))); if ($t15 !== undefined) { await $.set(C, "insert_shablon", $t15); } }
  { const $t16 = await $.iset((await $.v(C, "insert_shablon")), [10], (await $.mv((await $.v(C, "Edit_tey3")), "Text"))); if ($t16 !== undefined) { await $.set(C, "insert_shablon", $t16); } }
  { const $t17 = await $.iset((await $.v(C, "insert_shablon")), [11], (await $.mv((await $.v(C, "Edit_tey4")), "Text"))); if ($t17 !== undefined) { await $.set(C, "insert_shablon", $t17); } }
  { const $t18 = await $.iset((await $.v(C, "insert_shablon")), [12], (await $.mv((await $.v(C, "Edit_inf1")), "Text"))); if ($t18 !== undefined) { await $.set(C, "insert_shablon", $t18); } }
  { const $t19 = await $.iset((await $.v(C, "insert_shablon")), [13], (await $.mv((await $.v(C, "Edit_inf2")), "Text"))); if ($t19 !== undefined) { await $.set(C, "insert_shablon", $t19); } }
  { const $t20 = await $.iset((await $.v(C, "insert_shablon")), [14], (await $.mv((await $.v(C, "Edit_inf3")), "Text"))); if ($t20 !== undefined) { await $.set(C, "insert_shablon", $t20); } }
  { const $t21 = await $.iset((await $.v(C, "insert_shablon")), [15], (await $.mv((await $.v(C, "Edit_Referens")), "Text"))); if ($t21 !== undefined) { await $.set(C, "insert_shablon", $t21); } }
  { const $t22 = await $.iset((await $.v(C, "insert_shablon")), [16], (await $.mv((await $.v(C, "Edit_BankCode")), "Text"))); if ($t22 !== undefined) { await $.set(C, "insert_shablon", $t22); } }
  { const $t23 = await $.iset((await $.v(C, "insert_shablon")), [17], (await $.call(C, "trim", [(await $.mv((await $.mv((await $.mv((await $.v(C, "XohksMain")), "FormXohks")), "Edit_clientName")), "Text"))]))); if ($t23 !== undefined) { await $.set(C, "insert_shablon", $t23); } }
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "Callprocedure", ["xs_Beneficiary_shablon_insert", [(await $.idx((await $.v(C, "insert_shablon")), [1])), (await $.idx((await $.v(C, "insert_shablon")), [2])), (await $.idx((await $.v(C, "insert_shablon")), [3])), (await $.idx((await $.v(C, "insert_shablon")), [4])), (await $.idx((await $.v(C, "insert_shablon")), [5])), (await $.idx((await $.v(C, "insert_shablon")), [6])), (await $.idx((await $.v(C, "insert_shablon")), [7])), (await $.idx((await $.v(C, "insert_shablon")), [8])), (await $.idx((await $.v(C, "insert_shablon")), [9])), (await $.idx((await $.v(C, "insert_shablon")), [10])), (await $.idx((await $.v(C, "insert_shablon")), [11])), (await $.idx((await $.v(C, "insert_shablon")), [12])), (await $.idx((await $.v(C, "insert_shablon")), [13])), (await $.idx((await $.v(C, "insert_shablon")), [14])), (await $.idx((await $.v(C, "insert_shablon")), [15])), (await $.idx((await $.v(C, "insert_shablon")), [16])), (await $.idx((await $.v(C, "insert_shablon")), [17]))]])));
  await $.stmt((await $.call(C, "MessageDlg", ["Məlumat yadda saxlanıldı!", (await $.v(C, "mtInformation")), [(await $.v(C, "mbok"))], 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayment_Det", "XFBitBtn3Click", async function XFBitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not((await $.call(C, "Assigned", [(await $.v(C, "Form_get_to_shablon"))]))))) {
    await $.set(C, "Form_get_to_shablon", (await $.mcall((await $.v(C, "TForm_get_to_shablon")), "Create", [Self])));
  }
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_shablon")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "ODS_shablon")), "open", []);
  await $.mcall((await $.v(C, "Form_get_to_shablon")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayment_Det", "XFBitBtn4Click", async function XFBitBtn4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.v(C, "CheckField")), false))) {
    return L0.result;
  }
  await $.set(C, "bnf_count", $.add((await $.v(C, "bnf_count")), 1));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "Callprocedure", ["xs_beneficiary_insert", [(await $.v(C, "new_id")), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.v(C, "Bank_ID")), "Items")), [(await $.mv((await $.v(C, "Combo_BankName")), "itemindex"))]))])), (await $.mv((await $.v(C, "Edit_Account_Sub")), "text")), (await $.mv((await $.v(C, "Edit_Client_acc_no")), "text")), (await $.mv((await $.v(C, "edit_client_name")), "text")), (await $.mv((await $.v(C, "edit_client_code")), "text")), (await $.mv((await $.v(C, "Edit_Client_Voen")), "text")), $.add($.add($.add($.add($.add($.add($.add((await $.mv((await $.v(C, "edit_tey1")), "text")), "|"), (await $.mv((await $.v(C, "edit_tey2")), "text"))), "|"), (await $.mv((await $.v(C, "edit_tey3")), "text"))), "|"), (await $.mv((await $.v(C, "Edit_tey4")), "text"))), "|"), (await $.call(C, "strtofloat", [(await $.mv((await $.v(C, "Edit_TransCode")), "text"))])), $.add($.add($.add($.add($.add((await $.mv((await $.v(C, "edit_inf1")), "text")), "|"), (await $.mv((await $.v(C, "edit_inf2")), "text"))), "|"), (await $.mv((await $.v(C, "edit_inf3")), "text"))), "|"), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.v(C, "valute_id")), "items")), [(await $.mv((await $.v(C, "combo_valute")), "itemindex"))]))])), (await $.mv((await $.v(C, "edit_referens")), "text")), (await $.mv((await $.v(C, "Edit_Amount")), "value")), (await $.v(C, "bnf_count"))]])));
  if ($.truthy((await $.v(C, "after_add")))) {
    await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "Callprocedure", ["xs_BatchAmount_update", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "asinteger"))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "Ins")), "callintegerfunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BATCHS")), "RefreshRecord", []);
    await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Refresh", []);
  } else {
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_BNF")), "Text", $.add("\\BNF\\", (await $.call(C, "inttostr", [(await $.mv((await $.v(C, "FormPayment_Det")), "bnf_count"))]))));
    await $.mset((await $.mv((await $.v(C, "FormXohks")), "Edit_Amount")), "text", (await $.call(C, "floattostr", [$.add((await $.mv((await $.mv((await $.v(C, "FormXohks")), "Edit_Amount")), "value")), (await $.mv((await $.v(C, "edit_Amount")), "value")))])));
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
    await $.mset((await $.mv((await $.v(C, "FormPayment_Det")), "Edit_Referens")), "Text", (await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "INS")), "CallStringFunction", ["GetNewBeneficiaryReference", []])));
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
  await $.mset((await $.mv((await $.v(C, "FormXohks")), "ButtonPost")), "Enabled", true);
  await $.mset((await $.mv((await $.v(C, "FormPayment_Det")), "ButtonFinish")), "Enabled", true);
  await $.mcall((await $.mv((await $.v(C, "DataModXhoks")), "XS_BENEFICIARY")), "Last", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayment_Det", "XFBitBtn6Click", async function XFBitBtn6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "mess_edit")))) {
    await $.mcall((await $.v(C, "MainXohksForm")), "showdetals", []);
  } else {
    await $.stmt($.call(C, "close", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormPayment_Det", "XFBitBtn7Click", async function XFBitBtn7Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
