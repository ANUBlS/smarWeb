// Generated from UnitWares.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("UnitWares", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "Buttons", "ComCtrls", "ExtCtrls", "DBCtrls", "Mask", "Variants", "DBCtrlsEh", "Oracle", "UnitData", "MainResourceImpl", "UnitInsert_t", "SBTranslateProc", "sboapiDataModuleimpl"]);
  const C = [U];
  U.defClass("TFormUpdWares", "TForm", {"panelmain": {"name": "PanelMain", "type": "TPanel"}, "gboxpublic": {"name": "GBoxPublic", "type": "TGroupBox"}, "edit_wares_name": {"name": "Edit_Wares_Name", "type": "TEdit"}, "groupboxfxm": {"name": "GroupBoxFXM", "type": "TGroupBox"}, "cboxfxm": {"name": "CBoxFXM", "type": "TComboBox"}, "groupboxsector": {"name": "GroupBoxSector", "type": "TGroupBox"}, "edit_keeping_sec": {"name": "Edit_Keeping_Sec", "type": "TEdit"}, "groupbox3": {"name": "GroupBox3", "type": "TGroupBox"}, "dtp_using_date": {"name": "DTP_Using_Date", "type": "TDateTimePicker"}, "groupboxnb": {"name": "GroupBoxNB", "type": "TGroupBox"}, "label_first_price": {"name": "Label_First_Price", "type": "TLabel"}, "label_balance_price": {"name": "Label_Balance_Price", "type": "TLabel"}, "label_all_amort": {"name": "Label_All_Amort", "type": "TLabel"}, "label_amort": {"name": "Label_Amort", "type": "TLabel"}, "edit_first_price": {"name": "Edit_First_Price", "type": "TEdit"}, "edit_balance_price": {"name": "Edit_Balance_Price", "type": "TEdit"}, "edit_all_amort": {"name": "Edit_All_Amort", "type": "TEdit"}, "edit_amort": {"name": "Edit_Amort", "type": "TEdit"}, "groupboxnl": {"name": "GroupBoxNL", "type": "TGroupBox"}, "label_tax_first_price": {"name": "Label_Tax_First_Price", "type": "TLabel"}, "label_tax_balance_price": {"name": "Label_Tax_Balance_Price", "type": "TLabel"}, "labeltax_all_amort": {"name": "LabelTax_All_Amort", "type": "TLabel"}, "labeltax_amort": {"name": "LabelTax_Amort", "type": "TLabel"}, "edit_tax_first_price": {"name": "Edit_Tax_First_Price", "type": "TEdit"}, "edit_tax_balance_price": {"name": "Edit_Tax_Balance_Price", "type": "TEdit"}, "edit_tax_all_amort": {"name": "Edit_Tax_All_Amort", "type": "TEdit"}, "edit_tax_amort": {"name": "Edit_Tax_Amort", "type": "TEdit"}, "btnok": {"name": "BtnOk", "type": "TBitBtn"}, "groupboxinv_no": {"name": "GroupBoxInv_No", "type": "TGroupBox"}, "edit_inv_no": {"name": "Edit_Inv_No", "type": "TEdit"}, "groupbox1": {"name": "GroupBox1", "type": "TGroupBox"}, "edit_user": {"name": "Edit_User", "type": "TEdit"}, "groupbox_inv_date": {"name": "GroupBox_Inv_Date", "type": "TGroupBox"}, "groupbox4": {"name": "GroupBox4", "type": "TGroupBox"}, "dtp_close_date": {"name": "DTP_Close_Date", "type": "TDateTimePicker"}, "chbox1": {"name": "ChBox1", "type": "TCheckBox"}, "bitbtn1": {"name": "BitBtn1", "type": "TBitBtn"}, "dblcbname1": {"name": "DBLCBName1", "type": "TDBLookupComboBox"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "dblcbname22": {"name": "DBLCBName22", "type": "TDBLookupComboBox"}, "combobox11": {"name": "ComboBox11", "type": "TComboBox"}, "edit_keeping_sec1": {"name": "Edit_Keeping_Sec1", "type": "TEdit"}, "edit_user1": {"name": "Edit_User1", "type": "TEdit"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}}, {});
  U.init(async () => {
    U.var_("FormUpdWares", null, "TFormUpdWares");
  });
  U.method("TFormUpdWares", "FormKeyPress", async function FormKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), (await $.v(C, "VK_ESCAPE")))))) {
    await $.stmt($.call(C, "Close", []));
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdWares", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "date": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker2")), "DateTime", (await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallDateFunction", ["get_date", []])));
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OdsWares")), "FieldByName", ["close_format"])), "AsInteger")), 0))) {
    await $.mset((await $.v(C, "DBDateTimeEditEh1")), "Enabled", false);
    await $.mset((await $.v(C, "DBDateTimeEditEh2")), "Enabled", false);
  }
  L0["date"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP_Using_Date")), "DateTime"))]))]));
  {
    const $t1 = (await $.mv((await $.v(C, "DataModWares")), "OdsWares"));
    await $.mset((await $.wv([$t1], "DBDateTimeEditEh1", C, false)), "value", (await $.mv((await $.wcall([$t1], "FieldByName", ["amort_date"], C)), "AsVariant")));
    await $.mset((await $.wv([$t1], "DBDateTimeEditEh2", C, false)), "value", (await $.mv((await $.wcall([$t1], "FieldByName", ["inventar_date"], C)), "AsVariant")));
    if ($.truthy($.gt((await $.mv((await $.wcall([$t1], "FieldByName", ["enter_date"], C)), "AsDateTime")), (await $.wv([$t1], "date", { get: async () => L0["date"], set: async (v) => { L0["date"] = v; }, local: true }, false))))) {
      await $.mset((await $.wv([$t1], "DTP_Using_Date", C, false)), "DateTime", (await $.mv((await $.wcall([$t1], "FieldByName", ["enter_date"], C)), "AsDateTime")));
    }
    if ($.truthy((await $.or_(($.eq((await $.mv((await $.wcall([$t1], "FieldByName", ["close_format"], C)), "AsInteger")), 2)), async () => ($.eq((await $.mv((await $.wcall([$t1], "FieldByName", ["close_format"], C)), "AsInteger")), 3)))))) {
      await $.mset((await $.mv((await $.wv([$t1], "FormUpdWares", C, false)), "GroupBox4")), "Visible", (await $.wv([$t1], "true", C, false)));
      await $.mset((await $.wv([$t1], "DTP_Close_Date", C, false)), "Enabled", (await $.wv([$t1], "false", C, false)));
      await $.mset((await $.wv([$t1], "DTP_Close_Date", C, false)), "DateTime", (await $.mv((await $.wcall([$t1], "FieldByName", ["amort_date"], C)), "AsDateTime")));
      await $.mset((await $.wv([$t1], "DTP_Using_Date", C, false)), "DateTime", (await $.mv((await $.wcall([$t1], "FieldByName", ["enter_date"], C)), "AsDateTime")));
      await $.mset((await $.wv([$t1], "GroupBox_Inv_Date", C, false)), "Caption", "       İstifadə olunma tarixi    Amortizasiya tarixi       ");
      await $.mset((await $.wv([$t1], "GroupBox_Inv_Date", C, false)), "Left", 114);
      await $.mset((await $.wv([$t1], "GroupBox_Inv_Date", C, false)), "TabOrder", 0);
      await $.mset((await $.wv([$t1], "GroupBox_Inv_Date", C, false)), "Width", 250);
      await $.mset((await $.wv([$t1], "DBDateTimeEditEh1", C, false)), "Left", 240);
      await $.mset((await $.wv([$t1], "DBDateTimeEditEh1", C, false)), "TabOrder", 1);
      await $.mset((await $.wv([$t1], "DBDateTimeEditEh1", C, false)), "Top", 104);
      await $.mset((await $.wv([$t1], "DBDateTimeEditEh1", C, false)), "Width", 110);
      await $.mset((await $.wv([$t1], "DBDateTimeEditEh2", C, false)), "Left", 120);
      await $.mset((await $.wv([$t1], "DBDateTimeEditEh2", C, false)), "TabOrder", 1);
      await $.mset((await $.wv([$t1], "DBDateTimeEditEh2", C, false)), "Top", 104);
      await $.mset((await $.wv([$t1], "DBDateTimeEditEh2", C, false)), "Width", 110);
    }
    if ($.truthy((await $.and_(($.ne((await $.mv((await $.wcall([$t1], "FieldByName", ["close_format"], C)), "AsInteger")), 2)), async () => ($.ne((await $.mv((await $.wcall([$t1], "FieldByName", ["close_format"], C)), "AsInteger")), 3)))))) {
      await $.mset((await $.wv([$t1], "DTP_Using_Date", C, false)), "DateTime", (await $.mv((await $.wcall([$t1], "FieldByName", ["enter_date"], C)), "AsDateTime")));
      await $.mset((await $.wv([$t1], "GroupBox3", C, false)), "Left", 3);
      await $.mset((await $.wv([$t1], "GroupBox3", C, false)), "TabOrder", 3);
      await $.mset((await $.wv([$t1], "GroupBox3", C, false)), "Width", 112);
      await $.mset((await $.wv([$t1], "DTP_Using_Date", C, false)), "Left", 3);
      await $.mset((await $.wv([$t1], "DTP_Using_Date", C, false)), "Top", 16);
      await $.mset((await $.wv([$t1], "DTP_Using_Date", C, false)), "Width", 110);
      await $.mset((await $.wv([$t1], "GroupBox_Inv_Date", C, false)), "Left", 118);
      await $.mset((await $.wv([$t1], "GroupBox_Inv_Date", C, false)), "TabOrder", 0);
      await $.mset((await $.wv([$t1], "GroupBox_Inv_Date", C, false)), "Width", 370);
      await $.mset((await $.wv([$t1], "DBDateTimeEditEh2", C, false)), "Left", 133);
      await $.mset((await $.wv([$t1], "DBDateTimeEditEh2", C, false)), "TabOrder", 1);
      await $.mset((await $.wv([$t1], "DBDateTimeEditEh2", C, false)), "Top", 104);
      await $.mset((await $.wv([$t1], "DBDateTimeEditEh2", C, false)), "Width", 163);
      await $.mset((await $.wv([$t1], "DBDateTimeEditEh1", C, false)), "Left", 313);
      await $.mset((await $.wv([$t1], "DBDateTimeEditEh1", C, false)), "TabOrder", 1);
      await $.mset((await $.wv([$t1], "DBDateTimeEditEh1", C, false)), "Top", 104);
      await $.mset((await $.wv([$t1], "DBDateTimeEditEh1", C, false)), "Width", 163);
    }
    await $.mset((await $.wv([$t1], "Edit_Wares_Name", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["wares_name"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_First_Price", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["First_Price"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_Balance_Price", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["Remainder"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_All_Amort", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["All_Amort"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_Amort", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["Amort"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "DBLCBName1", C, false)), "keyvalue", (await $.mv((await $.wcall([$t1], "FieldByName", ["usrid"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_Tax_First_Price", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["Tax_First_Price"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_Tax_Balance_Price", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["Tax_Remainder"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_Tax_All_Amort", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["Tax_All_Amort"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_Tax_Amort", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["Tax_Amort"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "CBoxFXM", C, false)), "Text", (await $.mv((await $.wcall([$t1], "FieldByName", ["FXM"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_Keeping_Sec1", C, false)), "Text", (await $.mv((await $.wcall([$t1], "fieldbyname", ["keeping_sec"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "Edit_Inv_No", C, false)), "Text", (await $.mv((await $.wcall([$t1], "fieldbyname", ["inventar_no"], C)), "AsString")));
    await $.mset((await $.wv([$t1], "edit_user1", C, false)), "Text", (await $.mv((await $.wcall([$t1], "fieldbyname", ["user_name"], C)), "AsString")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdWares", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdWares", "Edit_First_PriceKeyPress", async function Edit_First_PriceKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), [...$.range("0","9"), ",", ".", "\b"]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdWares", "Edit_Balance_PriceChange", async function Edit_Balance_PriceChange(Self, p0) {
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
  U.method("TFormUpdWares", "BtnOkClick", async function BtnOkClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "v_wares_name": '', "v_wares_id": 0, "rh": 0, "v_inventar_date": null, "v_first_price": 0, "v_remainder": 0, "v_amort": 0, "v_all_amort": 0, "v_tax_first_price": 0, "v_tax_remainder": 0, "v_tax_amort": 0, "v_tax_all_amort": 0, "v_amort_date": null, "v_fxm": 0, "v_keeping_sec": '', "v_inventar_no": '', "v_user_name": '', "v_enter_date": 0, "v_xarak": '', "v_produc": '', "v_diger": '', "v_visible": 0, "v_uid": null, "v_uidk": null};
  await $.fixArgs(L0, ["sender"]);
  L0["v_xarak"] = (await $.mv((await $.mv((await $.v(C, "FormInsert_t")), "Edit2")), "Text"));
  L0["v_produc"] = (await $.mv((await $.mv((await $.v(C, "FormInsert_t")), "edit3")), "Text"));
  L0["v_diger"] = (await $.mv((await $.mv((await $.v(C, "FormInsert_t")), "edit7")), "Text"));
  if ($.truthy((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "Edit_Wares_Name")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "Edit_All_Amort")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit_Amort")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit_Balance_Price")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit_First_Price")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit_Tax_All_Amort")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit_Tax_Amort")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit_Tax_Balance_Price")), "Text")), "")))), async () => ($.ne((await $.mv((await $.v(C, "Edit_Tax_First_Price")), "Text")), "")))))) {
    if ($.truthy(($.le($.sub((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Balance_Price")), "Text"))])), (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_First_Price")), "Text"))]))), 0)))) {
      if ($.truthy(($.le($.sub((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Tax_Balance_Price")), "Text"))])), (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Tax_First_Price")), "Text"))]))), 0)))) {
        L0["v_wares_name"] = (await $.mv((await $.v(C, "Edit_Wares_Name")), "Text"));
        L0["v_user_name"] = (await $.mv((await $.v(C, "edit_User1")), "Text"));
        L0["v_uid"] = (await $.mv((await $.v(C, "DBLCBName1")), "KeyValue"));
        L0["v_keeping_sec"] = (await $.mv((await $.v(C, "Edit_Keeping_Sec1")), "Text"));
        L0["v_inventar_date"] = (await $.mv((await $.v(C, "DBDateTimeEditEh2")), "Value"));
        L0["v_wares_id"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "fieldbyname", ["wares_id"])), "AsFloat"));
        L0["v_first_price"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_First_Price")), "Text"))]));
        L0["v_remainder"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Balance_Price")), "Text"))]));
        L0["v_amort"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Amort")), "Text"))]));
        L0["v_all_amort"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_All_Amort")), "Text"))]));
        L0["v_tax_first_price"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Tax_First_Price")), "Text"))]));
        L0["v_tax_remainder"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Tax_Balance_Price")), "Text"))]));
        L0["v_tax_amort"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Tax_Amort")), "Text"))]));
        L0["v_tax_all_amort"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_Tax_All_Amort")), "Text"))]));
        L0["v_amort_date"] = (await $.mv((await $.v(C, "DBDateTimeEditEh1")), "Value"));
        L0["v_fxm"] = (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "CBoxFXM")), "Text"))]));
        L0["v_keeping_sec"] = (await $.mv((await $.v(C, "Edit_Keeping_Sec1")), "Text"));
        L0["v_inventar_no"] = (await $.mv((await $.v(C, "Edit_Inv_No")), "Text"));
        L0["v_enter_date"] = (await $.call(C, "integer", [(await $.call(C, "trunc", [(await $.mv((await $.v(C, "DTP_Using_Date")), "Date"))]))]));
        if ($.truthy((await $.or_((await $.or_(($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OdsWares")), "FieldByName", ["close_format"])), "AsInteger")), 0)), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OdsWares")), "FieldByName", ["close_format"])), "AsInteger")), 1)))), async () => ($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "OdsWares")), "FieldByName", ["close_format"])), "AsInteger")), 2)))))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallProcedure", ["Update_Wares", [L0["v_wares_name"], L0["v_wares_id"], L0["v_inventar_date"], L0["v_first_price"], L0["v_remainder"], L0["v_amort"], L0["v_all_amort"], L0["v_tax_first_price"], L0["v_tax_remainder"], L0["v_tax_amort"], L0["v_tax_all_amort"], L0["v_amort_date"], L0["v_fxm"], L0["v_keeping_sec"], L0["v_inventar_no"], L0["v_user_name"], L0["v_enter_date"], L0["v_xarak"], L0["v_produc"], L0["v_diger"], L0["v_visible"], L0["v_uid"], L0["v_uidk"]]])));
        }
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "SB_MAIN_RESOURCE")), "CallProcedure", ["usr_upd", [L0["v_wares_id"], L0["v_first_price"], L0["v_remainder"], L0["v_amort"], L0["v_all_amort"], L0["v_tax_remainder"], L0["v_tax_amort"], L0["v_tax_all_amort"]]])));
        await $.stmt($.call(C, "close", []));
        L0["rh"] = L0["v_wares_id"];
        await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "Refresh", []);
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataModWares")), "ODSWares")), "Locate", ["wares_id", L0["rh"], []])));
      } else {
        await $.stmt((await $.call(C, "ShowMessage", ["Vergi üzrə ilin əvvəlinə qalıq dəyər qalıq dəyərdən < və ya = olmalıdır!"])));
      }
    } else {
      await $.stmt((await $.call(C, "ShowMessage", ["Qalıq dəyər ilkin dəyərdən < və ya = olmalıdır!"])));
    }
  } else {
    await $.stmt((await $.call(C, "ShowMessage", ["Doldurulmamış xanalar var!"])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdWares", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdWares", "Edit_All_AmortChange", async function Edit_All_AmortChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.and_((await $.and_(($.ne((await $.mv((await $.v(C, "Edit_First_Price")), "Text")), "")), async () => ($.ne((await $.mv((await $.v(C, "Edit_Balance_Price")), "Text")), "")))), async () => ($.le($.sub((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_All_Amort")), "Text"))])), (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_First_Price")), "Text"))]))), 0)))))) {
    await $.mset((await $.v(C, "Edit_Balance_Price")), "Text", (await $.call(C, "FloatToStr", [$.sub((await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_First_Price")), "Text"))])), (await $.call(C, "StrToFloat", [(await $.mv((await $.v(C, "Edit_All_Amort")), "Text"))])))])));
  } else {
    await $.mset((await $.v(C, "Edit_Balance_Price")), "Text", "");
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdWares", "Edit_Wares_NameKeyPress", async function Edit_Wares_NameKeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy(($.eq((await L0["key"].get()), "'")))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TFormUpdWares", "ChBox1Click", async function ChBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdWares", "DateTimePicker2Change", async function DateTimePicker2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdWares", "DBDateTimeEditEh1Change", async function DBDateTimeEditEh1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdWares", "DBDateTimeEditEh2Change", async function DBDateTimeEditEh2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "a": 0, "b": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdWares", "DTP_Amort_DateChange", async function DTP_Amort_DateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdWares", "DTP_Inv_DateChange", async function DTP_Inv_DateChange(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TFormUpdWares", "BitBtn1Click", async function BitBtn1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.set(C, "gg", 2);
  await $.mcall((await $.v(C, "FormInsert_t")), "ShowModal", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
