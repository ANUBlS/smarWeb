// Generated from Transaction_Unit.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("Transaction_Unit", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ActnList", "HintBox", "ComCtrls", "CurrencyEdit", "DBViewComboBox", "Mask", "DBCtrls", "ExtCtrls", "SearchEdit", "Buttons", "CMDBSearchEdit", "Payment_Det", "sboapiDataModuleImpl", "Data_Unit", "LVPCSSImpl"]);
  const C = [U];
  U.defClass("TTransForm", "TForm", {"buttonpost": {"name": "ButtonPost", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "accountgb": {"name": "AccountGB", "type": "TGroupBox"}, "button_add": {"name": "Button_add", "type": "TButton"}, "panel6": {"name": "Panel6", "type": "TPanel"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "p1": {"name": "P1", "type": "TPanel"}, "edit_sender": {"name": "Edit_Sender", "type": "TEdit"}, "p2": {"name": "P2", "type": "TPanel"}, "speedbutton1": {"name": "SpeedButton1", "type": "TSpeedButton"}, "edit_referens": {"name": "Edit_Referens", "type": "TEdit"}, "p3": {"name": "P3", "type": "TPanel"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "p4": {"name": "P4", "type": "TPanel"}, "edit_bankcode": {"name": "Edit_BankCode", "type": "TEdit"}, "p7": {"name": "P7", "type": "TPanel"}, "edit_account_sub": {"name": "Edit_account_sub", "type": "TEdit"}, "p5": {"name": "P5", "type": "TPanel"}, "edit_account": {"name": "Edit_Account", "type": "TEdit"}, "p8": {"name": "P8", "type": "TPanel"}, "edit_bik": {"name": "Edit_Bik", "type": "TEdit"}, "p6": {"name": "P6", "type": "TPanel"}, "edit_voen": {"name": "Edit_voen", "type": "TEdit"}, "p9": {"name": "P9", "type": "TPanel"}, "combobox_cd": {"name": "ComboBox_CD", "type": "TComboBox"}, "panel5": {"name": "Panel5", "type": "TPanel"}, "labelfilialname": {"name": "LabelFilialName", "type": "TLabel"}, "panel3": {"name": "Panel3", "type": "TPanel"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "p16": {"name": "P16", "type": "TPanel"}, "edit_amount1": {"name": "Edit_Amount1", "type": "TEdit"}, "edit_amount": {"name": "Edit_amount", "type": "TCurrencyEdit"}, "p15": {"name": "P15", "type": "TPanel"}, "combo_valute": {"name": "Combo_valute", "type": "TComboBox"}, "valute_id": {"name": "Valute_ID", "type": "TListBox"}, "p14": {"name": "P14", "type": "TPanel"}, "combo_date": {"name": "Combo_date", "type": "TDateTimePicker"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "p11": {"name": "P11", "type": "TPanel"}, "edit_clientname": {"name": "Edit_clientName", "type": "TEdit"}, "p12": {"name": "P12", "type": "TPanel"}, "edit_client_code": {"name": "Edit_Client_code", "type": "TEdit"}, "p10": {"name": "P10", "type": "TPanel"}, "p13": {"name": "P13", "type": "TPanel"}, "edit_client_voen": {"name": "Edit_Client_voen", "type": "TEdit"}, "p_view": {"name": "P_view", "type": "TPanel"}, "label2": {"name": "Label2", "type": "TLabel"}, "dbtext4": {"name": "DBText4", "type": "TDBText"}, "label3": {"name": "Label3", "type": "TLabel"}, "dbedit_ostat": {"name": "DBEdit_ostat", "type": "TDBEdit"}, "dbedit_pokostat": {"name": "DBEdit_pokostat", "type": "TDBEdit"}, "panel2": {"name": "Panel2", "type": "TPanel"}, "dbtext1": {"name": "DBText1", "type": "TDBText"}, "panel4": {"name": "Panel4", "type": "TPanel"}, "panel20": {"name": "Panel20", "type": "TPanel"}, "edit_bnf": {"name": "Edit_BNF", "type": "TEdit"}, "accsearch": {"name": "AccSearch", "type": "TSearchEdit"}}, {});
  U.init(async () => {
    U.var_("TransForm", null, "TTransForm");
  });
  U.func("CheckField", async function CheckField(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"all": $.copyArg(p0), result: false};
  await $.fixArgs(L0, ["all"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataCheck")), "Close", []);
  await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataCheck")), "SQL")), "Clear", []);
  await $.stmt((await $.mcall((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataCheck")), "SQL")), "Add", [$.add($.add("Select * from account where acc_no = '", (await $.mv((await $.mv((await $.v(C, "TransForm")), "AccSearch")), "Text"))), "'")])));
  await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataCheck")), "Open", []);
  if ($.truthy((await $.or_((await $.or_((await $.or_((await $.or_(($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "TransForm")), "AccSearch")), "Text"))])), "")), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "TransForm")), "Edit_Client_voen")), "Text")), "")))), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "TransForm")), "AccSearch")), "Color")), (await $.v(C, "clred")))))), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "TransForm")), "Edit_clientName")), "Text"))])), "")))), async () => ($.eq((await $.mv((await $.mv((await $.v(C, "DataMod")), "DataCheck")), "RecordCount")), 0)))))) {
    L0["result"] = false;
    await $.stmt((await $.call(C, "MessageDlg", ["Melumat Tam deyil !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
  } else {
    L0["result"] = true;
  }
  if ($.truthy(L0["all"])) {
    if ($.truthy(($.eq((await $.mv((await $.mv((await $.v(C, "TransForm")), "Edit_Amount")), "Text")), "0")))) {
      L0["result"] = false;
      await $.stmt((await $.call(C, "MessageDlg", ["Melumat Tam deyil !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
    }
  }
  return L0.result;
}, {"params": ["all"], "kind": "function", "ptypes": ["Boolean"]});
  U.func("FindFilialID", async function FindFilialID(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: 0, "filial_id": 0};
  {
    const $t1 = (await $.v(C, "TransForm"));
    if ($.truthy($.gt((await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "DataAccount")), "FieldByName", ["Filial"])), "AsInteger")), 0))) {
      await $.wset([$t1], "Filial_Id", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "DataAccount")), "FieldByName", ["Filial"])), "AsInteger")), { get: async () => L0["filial_id"], set: async (v) => { L0["filial_id"] = v; }, local: true });
      await $.stmt((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "DataSetFilial")), "SetVariable", ["FilialID", (await $.wv([$t1], "Filial_Id", { get: async () => L0["filial_id"], set: async (v) => { L0["filial_id"] = v; }, local: true }, false))])));
      await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "DataSetFilial")), "Refresh", []);
      await $.mset((await $.wv([$t1], "LabelFilialName", C, false)), "Caption", $.add("FİLİAL - ", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "DataSetFilial")), "fieldbyname", ["Name"])), "AsString"))));
      await $.wset([$t1], "Result", (await $.mv((await $.mcall((await $.mv((await $.wv([$t1], "DataMod", C, false)), "DataSetFilial")), "fieldbyname", ["id"])), "AsInteger")), { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    } else {
      await $.mset((await $.wv([$t1], "LabelFilialName", C, false)), "Caption", "\"MƏRKƏZİ OFİS\"");
      await $.wset([$t1], "Result", 0, { get: async () => L0["result"], set: async (v) => { L0["result"] = v; }, local: true });
    }
  }
  return L0.result;
}, {"params": [], "kind": "function", "ptypes": []});
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
  if ($.truthy($.ne((await $.idx((await $.mv((await $.v(C, "Valute_ID")), "Items")), [(await $.mv((await $.v(C, "Combo_valute")), "ItemIndex"))])), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "FieldByName", ["val_acc"])), "AsString"))))) {
    await $.stmt((await $.call(C, "MessageDlg", ["Bu hesab secilmish valutaya uygun deyil !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
    return L0.result;
  }
  {
    const $t2 = (await $.v(C, "PaymentDetalsForm"));
    if ($.truthy((await $.mv((await $.wv([$t2], "RB_102T", C, false)), "Checked")))) {
      await $.mset((await $.wv([$t2], "RB_102T", C, false)), "Checked", (await $.wv([$t2], "false", C, false)));
      await $.mset((await $.wv([$t2], "RB_102", C, false)), "Checked", (await $.wv([$t2], "true", C, false)));
    }
    await $.mset((await $.wv([$t2], "Edit_BankName_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "DataMod", C, false)), "DataBankInfo")), "fieldbyname", ["BANK"])), "AsString")));
    await $.mset((await $.wv([$t2], "Edit_BIK_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "DataMod", C, false)), "DataBankInfo")), "fieldbyname", ["SWIFT"])), "AsString")));
    await $.mset((await $.wv([$t2], "Edit_BankCode_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "DataMod", C, false)), "DataBankInfo")), "fieldbyname", ["KOD_B"])), "AsString")));
    await $.mset((await $.wv([$t2], "Edit_account_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "DataMod", C, false)), "DataBankInfo")), "fieldbyname", ["KRNO"])), "AsString")));
    await $.mset((await $.wv([$t2], "Edit_Voen_Self", C, false)), "Text", (await $.mv((await $.mcall((await $.mv((await $.wv([$t2], "DataMod", C, false)), "DataBankInfo")), "fieldbyname", ["INN"])), "AsString")));
    await $.mset((await $.wv([$t2], "Combo_Valute", C, false)), "ItemIndex", (await $.mv((await $.mv((await $.wv([$t2], "TransForm", C, false)), "Combo_valute")), "ItemIndex")));
    await $.mset((await $.wv([$t2], "Edit_account_sub_Self", C, false)), "Text", (await $.mv((await $.mv((await $.wv([$t2], "TransForm", C, false)), "Edit_account_sub")), "text")));
    await $.mset((await $.wv([$t2], "Combo_BankName", C, false)), "ItemIndex", (-(1)));
    await $.mcall((await $.wv([$t2], "Edit_BIK", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t2], "Edit_BankCode", C, false)), "clear", []);
    await $.mcall((await $.wv([$t2], "Edit_Referens", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t2], "Edit_account", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t2], "Edit_Account_Sub", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t2], "Edit_Voen", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t2], "Edit_Amount", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t2], "Edit_TransCode", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t2], "Edit_Client_Name", C, false)), "Clear", []);
    await $.mset((await $.wv([$t2], "Edit_Client_Code", C, false)), "Text", "/");
    await $.mcall((await $.wv([$t2], "Edit_Client_acc_no", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t2], "Edit_Client_Voen", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t2], "Edit_inf1", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t2], "Edit_inf2", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t2], "Edit_inf3", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t2], "Edit_tey1", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t2], "Edit_tey2", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t2], "Edit_tey3", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t2], "Edit_tey4", C, false)), "Clear", []);
    await $.mcall((await $.wv([$t2], "SearchBankM", C, false)), "Clear", []);
  }
  {
    const $t3 = (await $.v(C, "PaymentDetalsForm"));
    await $.mset((await $.wv([$t3], "ButtonFinish", C, false)), "Enabled", (await $.wv([$t3], "True", C, false)));
    await $.mset((await $.wv([$t3], "Button2", C, false)), "Enabled", (await $.wv([$t3], "false", C, false)));
    await $.mset((await $.wv([$t3], "Button4", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.mset((await $.wv([$t3], "SpeedButton2", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.mset((await $.wv([$t3], "Combo_BankName", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.mset((await $.wv([$t3], "Button5", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.mset((await $.wv([$t3], "SearchBankM", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.mset((await $.wv([$t3], "Edit_Client_acc_no", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.mset((await $.wv([$t3], "Edit_Client_Name", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.mset((await $.wv([$t3], "Edit_Client_Code", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.mset((await $.wv([$t3], "Edit_Client_Voen", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.mset((await $.wv([$t3], "Edit_tey1", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.mset((await $.wv([$t3], "Edit_tey2", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.mset((await $.wv([$t3], "Edit_tey3", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.mset((await $.wv([$t3], "Edit_tey4", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.mset((await $.wv([$t3], "Edit_inf1", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.mset((await $.wv([$t3], "Edit_inf2", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.mset((await $.wv([$t3], "Edit_inf3", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.mset((await $.wv([$t3], "GroupBox7", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.mset((await $.wv([$t3], "Edit_Amount", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.mset((await $.wv([$t3], "SpeedButton1", C, false)), "Enabled", (await $.wv([$t3], "true", C, false)));
    await $.stmt($.wcall([$t3], "ShowModal", [], C));
  }
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
  await L0["key"].set((await $.mcall((await $.v(C, "LVPCSSForm")), "OnlyNumber", [(await L0["key"].get())])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransForm", "Edit_account_subKeyPress", async function Edit_account_subKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.mcall((await $.v(C, "LVPCSSForm")), "OnlyNumber", [(await L0["key"].get())])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransForm", "ButtonPostClick", async function ButtonPostClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "isfilial": 0, "transdate": 0, "format": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.or_(($.eq((await $.call(C, "checkfield", [true])), false)), async () => ($.eq((await $.call(C, "Trim", [(await $.mv((await $.mv((await $.v(C, "TransForm")), "Edit_Referens")), "Text"))])), "")))))) {
    await $.stmt((await $.call(C, "MessageDlg", ["Məlumat Tam deyil", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
    return L0.result;
  }
  if ($.truthy($.ne((await $.idx((await $.mv((await $.v(C, "Valute_ID")), "Items")), [(await $.mv((await $.v(C, "Combo_valute")), "ItemIndex"))])), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "FieldByName", ["val_acc"])), "AsString"))))) {
    await $.stmt((await $.call(C, "MessageDlg", ["Bu hesab secilmish valutaya uygun deyil !", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
    return L0.result;
  }
  await $.set(C, "trans_date", (await $.call(C, "trunc", [(await $.mv((await $.v(C, "Combo_date")), "DateTime"))])));
  if ($.truthy($.ne((await $.mv((await $.v(C, "Edit_BNF")), "Text")), "/BNF/0"))) {
    if ($.truthy((await $.v(C, "Batchs_Edit")))) {
      if ($.truthy((await $.and_(($.eq((await $.mv((await $.v(C, "edit_referens")), "text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["trans_ref"])), "AsString")))), async () => ($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["Status"])), "AsInteger")), 0)))))) {
        await $.stmt((await $.call(C, "MessageDlg", ["Qeydiyyat №-si deyışilməlidir!", (await $.v(C, "mtWarning")), [(await $.v(C, "mbok"))], 0])));
        return L0.result;
      }
      await $.set(C, "new_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["id"])), "AsInteger")));
    }
    L0["isfilial"] = (await $.v(C, "FindFilialID"));
    L0["transdate"] = (await $.call(C, "Trunc", [(await $.v(C, "GetUseDate"))]));
    if ($.truthy((await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "RB_102")), "Checked")))) {
      await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "LVPCSSForm")), "GridBatchs")), "Columns")), [13])), "Font")), "Color", (await $.v(C, "clblack")));
      L0["format"] = "MT102";
    }
    if ($.truthy((await $.mv((await $.mv((await $.v(C, "PaymentDetalsForm")), "RB_102T")), "Checked")))) {
      await $.mset((await $.mv((await $.idx((await $.mv((await $.mv((await $.v(C, "LVPCSSForm")), "GridBatchs")), "Columns")), [13])), "Font")), "Color", (await $.v(C, "clred")));
      L0["format"] = "MT102T";
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "INS")), "CallProcedure", ["xs_Batchs_update", [(await $.v(C, "new_id")), "CREDIT", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "fieldbyname", ["id"])), "asinteger")), (await $.mv((await $.v(C, "edit_clientname")), "text")), (await $.mv((await $.v(C, "edit_client_code")), "text")), (await $.mv((await $.v(C, "edit_referens")), "text")), (await $.mv((await $.v(C, "edit_amount")), "value")), (await $.call(C, "strtofloat", [(await $.idx((await $.mv((await $.v(C, "valute_id")), "items")), [(await $.mv((await $.v(C, "combo_valute")), "itemindex"))]))])), L0["isfilial"], (await $.mv((await $.v(C, "Edit_client_voen")), "text")), L0["format"]]])));
    await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Commit", []);
    if ($.truthy((await $.v(C, "Batchs_Edit")))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod")), "Ins")), "CallIntegerFunction", ["xs_Batchs_ChangeStatus", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "fieldbyname", ["ID"])), "ASinteger")), 0]])));
      await $.mcall((await $.mv((await $.v(C, "DataMod")), "XS_BATCHS")), "RefreshRecord", []);
    } else {
      await $.mcall((await $.v(C, "LVPCSSForm")), "RefreshDataBatchs", []);
    }
  }
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
  await $.mset((await $.v(C, "Edit_Referens")), "text", (await $.mcall((await $.mv((await $.v(C, "DataMod")), "GetReference")), "CallStringfunction", ["GetNewBatchRefrence", [(await $.call(C, "strtoint", [(await $.idx((await $.mv((await $.v(C, "valute_id")), "items")), [(await $.mv((await $.v(C, "combo_valute")), "itemindex"))]))]))]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransForm", "AccSearch_Change", async function AccSearch_Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransForm", "P_viewEnter", async function P_viewEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "GroupBox2")), "SetFocus", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransForm", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "sboapiDataModule")), "SBSession")), "Rollback", []);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TTransForm", "Edit_clientNameKeyPress", async function Edit_clientNameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(((await $.or_(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ...$.range("a","z"), ...$.range("A","Z"), "/", "-", ":", "(", ")", ".", ",", "'", "+", "{", "}", " ", "\b"])))), async () => ($.eq((await $.mv((await $.call(C, "TEdit", [L0["sender"]])), "Text")), "/"))))), async () => ($.ne((await L0["key"].get()), "\b")))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransForm", "Edit_ReferensChange", async function Edit_ReferensChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.v(C, "Batchs_Edit")))) {
    await $.mset((await $.v(C, "ButtonPost")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransForm", "AccSearchChange", async function AccSearchChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "AccSearch")), "Color")), (await $.v(C, "clred")))), async () => ($.ne((await $.mv((await $.v(C, "AccSearch")), "Text")), "")))))) {
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "fieldbyname", ["INN"])), "AsVariant")), (await $.v(C, "Null"))))) {
      await $.mset((await $.v(C, "Edit_Client_voen")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "fieldbyname", ["INN"])), "AsString")));
    } else {
      await $.mset((await $.v(C, "Edit_Client_voen")), "Text", "/");
    }
    if ($.truthy($.gt((await $.v(C, "FindFilialID")), 0))) {
      await $.stmt((await $.mcall((await $.v(C, "LVPCSSForm")), "ViewBankInfo", [true, (await $.v(C, "FindFilialID"))])));
    } else {
      await $.stmt((await $.mcall((await $.v(C, "LVPCSSForm")), "ViewBankInfo", [false, 0])));
    }
  } else {
    await $.mcall((await $.v(C, "Edit_Client_voen")), "Clear", []);
    await $.mcall((await $.v(C, "DBEdit_ostat")), "Clear", []);
    await $.mcall((await $.v(C, "DBEdit_pokostat")), "Clear", []);
  }
  if ($.truthy((await $.v(C, "Batchs_Edit")))) {
    await $.mset((await $.v(C, "ButtonPost")), "Enabled", true);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TTransForm", "AccSearchKeyPress", async function AccSearchKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ...$.range("a","z"), ...$.range("A","Z"), "-", ":", "(", ")", ".", ",", "'", "+", "{", "}", " ", "\b"])))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TTransForm", "AccSearchEnter", async function AccSearchEnter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "fieldbyname", ["INN"])), "AsVariant")), (await $.v(C, "Null"))))) {
    await $.mset((await $.v(C, "Edit_Client_voen")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod")), "DataAccount")), "fieldbyname", ["INN"])), "AsString")));
  } else {
    await $.mset((await $.v(C, "Edit_Client_voen")), "Text", "/");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
