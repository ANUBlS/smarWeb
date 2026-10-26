// Generated from UnitInsWares.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitInsWares", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "ExtCtrls", "StdCtrls", "ComCtrls", "Buttons", "Oracle", "DBCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "UnitData", "MainResourceImpl", "UnitShowTrans", "UnitInsert_t", "sboapiDataModuleImpl", "SBTranslateProc"]);
  const C = [U];
  U.defClass("TFormInsert", "TForm", {"panelmain": {"name": "PanelMain", "type": "TPanel"}, "gboxpublic": {"name": "GBoxPublic", "type": "TGroupBox"}, "edit_wares_name": {"name": "Edit_Wares_Name", "type": "TEdit"}, "groupboxfxm": {"name": "GroupBoxFXM", "type": "TGroupBox"}, "groupboxsector": {"name": "GroupBoxSector", "type": "TGroupBox"}, "cboxfxm": {"name": "CBoxFXM", "type": "TComboBox"}, "groupbox_using_date": {"name": "GroupBox_Using_Date", "type": "TGroupBox"}, "groupboxnb": {"name": "GroupBoxNB", "type": "TGroupBox"}, "groupboxnl": {"name": "GroupBoxNL", "type": "TGroupBox"}, "edit_first_price": {"name": "Edit_First_Price", "type": "TEdit"}, "edit_balance_price": {"name": "Edit_Balance_Price", "type": "TEdit"}, "edit_all_amort": {"name": "Edit_All_Amort", "type": "TEdit"}, "edit_amort": {"name": "Edit_Amort", "type": "TEdit"}, "edit_tax_first_price": {"name": "Edit_Tax_First_Price", "type": "TEdit"}, "edit_tax_balance_price": {"name": "Edit_Tax_Balance_Price", "type": "TEdit"}, "edit_tax_all_amort": {"name": "Edit_Tax_All_Amort", "type": "TEdit"}, "edit_tax_amort": {"name": "Edit_Tax_Amort", "type": "TEdit"}, "label_first_price": {"name": "Label_First_Price", "type": "TLabel"}, "label_balance_price": {"name": "Label_Balance_Price", "type": "TLabel"}, "label_all_amort": {"name": "Label_All_Amort", "type": "TLabel"}, "label_amort": {"name": "Label_Amort", "type": "TLabel"}, "label_tax_first_price": {"name": "Label_Tax_First_Price", "type": "TLabel"}, "label_tax_balance_price": {"name": "Label_Tax_Balance_Price", "type": "TLabel"}, "labeltax_all_amort": {"name": "LabelTax_All_Amort", "type": "TLabel"}, "labeltax_amort": {"name": "LabelTax_Amort", "type": "TLabel"}, "groupboxaction": {"name": "GroupBoxAction", "type": "TGroupBox"}, "memoaction": {"name": "MemoAction", "type": "TMemo"}, "image": {"name": "Image", "type": "TImage"}, "groupboxinv_no": {"name": "GroupBoxInv_No", "type": "TGroupBox"}, "edit_inv_no": {"name": "Edit_Inv_No", "type": "TEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "groupbox2": {"name": "GroupBox2", "type": "TGroupBox"}, "dtp_inv_date": {"name": "DTP_Inv_Date", "type": "TDateTimePicker"}, "dtp_using_date": {"name": "DTP_Using_Date", "type": "TDateTimePicker"}, "chbox1": {"name": "ChBox1", "type": "TCheckBox"}, "dtp_amort_date": {"name": "DTP_Amort_Date", "type": "TDateTimePicker"}, "bitbtn2": {"name": "BitBtn2", "type": "TBitBtn"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "bitbtn3": {"name": "BitBtn3", "type": "TBitBtn"}, "dblcbname33": {"name": "DBLCBName33", "type": "TDBLookupComboBox"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "dblcbname22": {"name": "DBLCBName22", "type": "TDBLookupComboBox"}, "edit_keeping_sec": {"name": "Edit_Keeping_Sec", "type": "TEdit"}, "edit_user": {"name": "Edit_User", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("FormInsert", null, "TFormInsert");
  });
  U.method("TFormInsert", "BtnOkClick", async function BtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_wares_name": '', "v_inventar_date": null, "v_groups_id": 0, "v_first_price": 0, "v_remainder": 0, "v_amort": 0, "v_all_amort": 0, "v_percent": 0, "v_tax_first_price": 0, "v_tax_remainder": 0, "v_tax_amort": 0, "v_tax_all_amort": 0, "v_tax_percent": 0, "v_amort_date": null, "v_fxm": 0, "v_keeping_sec": '', "v_inventar_no": '', "v_debt": 0, "v_cred": 0, "v_trans_name": '', "v_user_name": '', "v_enter_date": 0, "v_xarak": '', "v_produc": '', "v_diger": '', "v_wares_id2": 0, "v_uid": 0, "v_uidk": 0};
  await $.fixArgs(L0, ["sender"]);
  L0["v_xarak"] = (await $.mv((await $.mv((await $.v(C, "FormInsert_t")), "Edit2")), "Text"));
  L0["v_produc"] = (await $.mv((await $.mv((await $.v(C, "FormInsert_t")), "edit3")), "Text"));
  L0["v_diger"] = (await $.mv((await $.mv((await $.v(C, "FormInsert_t")), "edit7")), "Text"));
  await $.set(C, "New_Or_Calc_Wares_Trans", 4);
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "Edit_Wares_Name")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "Edit_All_Amort")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit_Amort")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit_Balance_Price")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit_First_Price")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit_Tax_All_Amort")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit_Tax_Amort")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit_Tax_Balance_Price")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit_Tax_First_Price")), "Text")), "")))))) {
    if ($.truthy(($.le($.sub((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Balance_Price")), "Text"))])), (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_First_Price")), "Text"))]))), 0)))) {
      if ($.truthy(($.le($.sub((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Tax_Balance_Price")), "Text"))])), (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Tax_First_Price")), "Text"))]))), 0)))) {
        L0["v_wares_id2"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "fieldbyname", ["wares_id"])), "AsInteger"));
        L0["v_wares_name"] = (await $.mv((await $.v(C, "Edit_Wares_Name")), "Text"));
        L0["v_user_name"] = (await $.mv((await $.v(C, "Edit_User")), "text"));
        L0["v_inventar_date"] = (await $.mv((await $.v(C, "DBDateTimeEditEh1")), "Value"));
        L0["v_groups_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSGroups")), "fieldbyname", ["id"])), "AsFloat"));
        L0["v_first_price"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_First_Price")), "Text"))]));
        L0["v_remainder"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Balance_Price")), "Text"))]));
        L0["v_amort"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Amort")), "Text"))]));
        L0["v_all_amort"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_All_Amort")), "Text"))]));
        L0["v_percent"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSGroups")), "fieldbyname", ["amort"])), "AsFloat"));
        L0["v_tax_first_price"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Tax_First_Price")), "Text"))]));
        L0["v_tax_remainder"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Tax_Balance_Price")), "Text"))]));
        L0["v_tax_amort"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Tax_Amort")), "Text"))]));
        L0["v_tax_all_amort"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Tax_All_Amort")), "Text"))]));
        L0["v_tax_percent"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSGroups")), "fieldbyname", ["taxamort"])), "AsFloat"));
        L0["v_enter_date"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP_Using_Date")), "date"))]))]));
        L0["v_user_name"] = (await $.mv((await $.v(C, "Edit_User")), "Text"));
        L0["v_keeping_sec"] = (await $.mv((await $.v(C, "Edit_Keeping_Sec")), "Text"));
        L0["v_fxm"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "CBoxFXM")), "Text"))]));
        L0["v_inventar_no"] = (await $.mv((await $.v(C, "Edit_Inv_No")), "Text"));
        L0["v_amort_date"] = (await $.mv((await $.v(C, "DBDateTimeEditEh2")), "Value"));
        await $.set(C, "p_id", (await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallIntegerFunction", ["add_wares", [L0["v_wares_id2"], L0["v_wares_name"], L0["v_inventar_date"], L0["v_groups_id"], L0["v_first_price"], L0["v_remainder"], L0["v_amort"], L0["v_all_amort"], L0["v_percent"], L0["v_tax_first_price"], L0["v_tax_remainder"], L0["v_tax_amort"], L0["v_tax_all_amort"], L0["v_tax_percent"], L0["v_amort_date"], L0["v_fxm"], L0["v_keeping_sec"], L0["v_inventar_no"], L0["v_user_name"], L0["v_enter_date"], L0["v_xarak"], L0["v_produc"], L0["v_diger"], L0["v_uid"], L0["v_uidk"]]])));
        await $.mset((await $.mv((await $.v(C, "FormInsert_t")), "edit2")), "Text", "");
        await $.mset((await $.mv((await $.v(C, "FormInsert_t")), "edit3")), "Text", "");
        await $.mset((await $.mv((await $.v(C, "FormInsert_t")), "edit7")), "Text", "");
        await $.stmt($.call(C, "close", []));
        await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "Refresh", []);
      } else {
        await $.stmt((await $.call(C, "ShowMessage", ["Vergi üzrə ilin əvvəlinə qalıq dəyər qalıq dəyərdən < və ya = olmalıdır!"])));
      }
    } else {
      await $.stmt((await $.call(C, "ShowMessage", ["Qalıq dəyər ilkin dəyərdən < və ya = olmalıdır!"])));
    }
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Doldurulmamış xanalar var!"])));
  }
  await $.mset((await $.v(C, "Edit_Wares_Name")), "Text", "");
  await $.mset((await $.v(C, "Edit_First_Price")), "Text", "");
  await $.mset((await $.v(C, "Edit_Balance_Price")), "Text", "");
  await $.mset((await $.v(C, "Edit_All_Amort")), "Text", "");
  await $.mset((await $.v(C, "Edit_Amort")), "Text", "");
  await $.mset((await $.v(C, "Edit_Tax_First_Price")), "Text", "");
  await $.mset((await $.v(C, "Edit_Tax_Balance_Price")), "Text", "");
  await $.mset((await $.v(C, "Edit_Tax_All_Amort")), "Text", "");
  await $.mset((await $.v(C, "Edit_Tax_Amort")), "Text", "");
  await $.mset((await $.v(C, "CBoxFXM")), "Text", "");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInsert", "Edit_First_PriceChange", async function Edit_First_PriceChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "Edit_Tax_First_Price")), "Text", (await $.mv((await $.v(C, "Edit_First_Price")), "Text")));
  await $.mset((await $.v(C, "Edit_Balance_Price")), "Text", (await $.mv((await $.v(C, "Edit_First_Price")), "Text")));
  await $.mset((await $.v(C, "Edit_Tax_Balance_Price")), "Text", (await $.mv((await $.v(C, "Edit_Balance_Price")), "Text")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInsert", "Edit_First_PriceKeyPress", async function Edit_First_PriceKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ",", ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormInsert", "Edit_Balance_PriceChange", async function Edit_Balance_PriceChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "Edit_First_Price")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "Edit_Balance_Price")), "Text")), "")))), async () => ($.le($.sub((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Balance_Price")), "Text"))])), (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_First_Price")), "Text"))]))), 0)))))) {
    await $.mset((await $.v(C, "Edit_All_Amort")), "Text", (await $.call(C, "FloatToStr", [$.sub((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_First_Price")), "Text"))])), (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Balance_Price")), "Text"))])))])));
  } else {
    await $.mset((await $.v(C, "Edit_All_Amort")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInsert", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormInsert", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DTP_Using_Date")), "Date", (await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallDateFunction", ["get_date", []])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInsert", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInsert", "Edit_Tax_Balance_PriceChange", async function Edit_Tax_Balance_PriceChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_(($.ne((await $.mv((await $.v(C, "Edit_First_Price")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "Edit_Tax_Balance_Price")), "Text")), "")))))) {
    await $.mset((await $.v(C, "Edit_Tax_All_Amort")), "Text", (await $.call(C, "FloatToStr", [$.sub((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_First_Price")), "Text"))])), (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Tax_Balance_Price")), "Text"))])))])));
  } else {
    await $.mset((await $.v(C, "Edit_Tax_All_Amort")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInsert", "Edit_Wares_NameKeyPress", async function Edit_Wares_NameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await L0["key"].get()), "'")))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormInsert", "ChBox1Click", async function ChBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInsert", "DTP_Inv_DateChange", async function DTP_Inv_DateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInsert", "BitBtn3Click", async function BitBtn3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "FormInsert")), "Close", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInsert", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "gg", 1);
  await $.mcall((await $.v(C, "FormInsert_t")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInsert", "DBDateTimeEditEh1ButtonClick", async function DBDateTimeEditEh1ButtonClick(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "handled": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender", "Handled"], "kind": "procedure", "ptypes": ["TObject", "Boolean"]});
  U.method("TFormInsert", "DBDateTimeEditEh1Change", async function DBDateTimeEditEh1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DBDateTimeEditEh2")), "Value", (await $.mv((await $.v(C, "DBDateTimeEditEh1")), "Value")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormInsert", "DBDateTimeEditEh2Change", async function DBDateTimeEditEh2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
