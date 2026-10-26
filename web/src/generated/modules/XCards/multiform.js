// Generated from multiform.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("multiform", ["Windows", "Messages", "SysUtils", "Variants", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "DBGridEh", "StdCtrls", "Mask", "DBCtrlsEh", "DBLookupEh", "DB", "OracleData", "Unit18", "Unitclient2", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TMultiCurrency", "TForm", {"dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboboxEh"}, "button1": {"name": "Button1", "type": "TButton"}, "dblookupcomboboxeh2": {"name": "DBLookupComboboxEh2", "type": "TDBLookupComboboxEh"}, "multi1": {"name": "multi1", "type": "TCheckBox"}, "multi2": {"name": "multi2", "type": "TCheckBox"}, "edit1": {"name": "Edit1", "type": "TEdit"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "oracledataset1": {"name": "OracleDataSet1", "type": "TOracleDataSet"}, "datasource1": {"name": "DataSource1", "type": "TDataSource"}}, {});
  U.init(async () => {
    U.var_("MultiCurrency", null, "TMultiCurrency");
  });
  U.method("TMultiCurrency", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "urg": 0, "kr": 0, "wt": '', "k": ''};
  await $.fixArgs(L0, ["sender"]);
  L0["k"] = "\r";
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "max")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "max")), "Open", []);
  await $.stmt($.call(C, "close", []));
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "clients2")), "CheckBox2")), "Checked")))) {
    L0["urg"] = 1;
  } else {
    L0["urg"] = 0;
  }
  if ($.truthy((await $.mv((await $.mv((await $.v(C, "clients2")), "CheckBox3")), "Checked")))) {
    L0["kr"] = 1;
  } else {
    L0["kr"] = 0;
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit4")), "Text")), "new"))) {
    if ($.truthy((await $.mv((await $.v(C, "multi2")), "Checked")))) {
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "referens")), "close", []);
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "referens")), "open", []);
      await $.mcall((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "referens")), "fieldbyname", ["refe"])), "asstring", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["new_card", [$.add($.add((await $.mv((await $.mv((await $.v(C, "clients2")), "edit15")), "text")), " "), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit16")), "text"))), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit15")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit16")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit18")), "text")), (await $.call(C, "datetostr", [(await $.mv((await $.mv((await $.v(C, "clients2")), "DateTimePicker7")), "DateTime"))])), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit17")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit27")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit20")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit19")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit22")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox4")), "text")), (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "Text")), (await $.mv((await $.v(C, "Edit2")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox1")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox12")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit28")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "DateTimePicker5")), "DateTime")), (await $.mv((await $.mv((await $.v(C, "clients2")), "DateTimePicker8")), "DateTime")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit26")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit23")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox2")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit25")), "Text")), 1, L0["urg"], (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit21")), "Text")), L0["kr"], (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit14")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox11")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox10")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "DateTimePicker2")), "datetime")), (await $.mv((await $.v(C, "edit3")), "Text"))]])));
      await $.stmt($.call(C, "close", []));
    }
    if ($.truthy((await $.mv((await $.v(C, "multi1")), "Checked")))) {
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "referens")), "close", []);
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "referens")), "open", []);
      await $.mcall((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "referens")), "fieldbyname", ["refe"])), "asstring", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["new_card", [$.add($.add((await $.mv((await $.mv((await $.v(C, "clients2")), "edit15")), "text")), " "), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit16")), "text"))), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit15")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit16")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit18")), "text")), (await $.call(C, "datetostr", [(await $.mv((await $.mv((await $.v(C, "clients2")), "DateTimePicker7")), "DateTime"))])), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit17")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit27")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit20")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit19")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit22")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox4")), "text")), (await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")), (await $.mv((await $.v(C, "Edit1")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox1")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox12")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit28")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "DateTimePicker5")), "DateTime")), (await $.mv((await $.mv((await $.v(C, "clients2")), "DateTimePicker8")), "DateTime")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit26")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit23")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox2")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit25")), "Text")), 1, L0["urg"], (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit21")), "Text")), L0["kr"], (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit14")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox11")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox10")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "DateTimePicker2")), "datetime")), (await $.mv((await $.v(C, "edit3")), "Text"))]])));
      await $.stmt((await $.call(C, "ShowMessage", ["Yeni Multikart əlavə edildi!"])));
      await $.stmt($.call(C, "close", []));
    }
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit4")), "Text")), "edit"))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "referens")), "close", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "referens")), "open", []);
    await $.mset((await $.mv((await $.v(C, "clients2")), "edit26")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "referens")), "fieldbyname", ["refe"])), "asstring")));
    if ($.truthy($.eq((await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox5")), "Text")), "WITH"))) {
      L0["wt"] = "0003";
    } else {
      L0["wt"] = "0002";
    }
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fmaincard")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fmaincard")), "SetVariable", ["CRD", (await $.mv((await $.mv((await $.v(C, "clients2")), "edit24")), "text"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "fmaincard")), "Open", []);
    if ($.truthy((await $.mv((await $.v(C, "multi1")), "Checked")))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["edit_card", [$.add($.add((await $.mv((await $.mv((await $.v(C, "clients2")), "edit15")), "text")), " "), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit16")), "text"))), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit15")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit16")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit18")), "text")), (await $.call(C, "datetostr", [(await $.mv((await $.mv((await $.v(C, "clients2")), "DateTimePicker7")), "DateTime"))])), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit17")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit27")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit20")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit19")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit22")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox4")), "text")), (await $.mv((await $.v(C, "DBLookupCombobox1")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "dbedit18")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox1")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox12")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit28")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "DateTimePicker5")), "DateTime")), (await $.mv((await $.mv((await $.v(C, "clients2")), "DateTimePicker8")), "DateTime")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit26")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit23")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox2")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit25")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit2")), "text")), L0["urg"], (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit21")), "Text")), L0["kr"], (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit14")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox11")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox10")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit24")), "text")), L0["wt"], (await $.mv((await $.mv((await $.v(C, "clients2")), "DateTimePicker2")), "datetime")), (await $.mv((await $.v(C, "edit3")), "Text"))]])));
      await $.stmt((await $.call(C, "ShowMessage", [" Sub Multikart əlavə edildi!"])));
      await $.stmt($.call(C, "close", []));
    }
    if ($.truthy((await $.mv((await $.v(C, "multi2")), "Checked")))) {
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["edit_card", [$.add($.add((await $.mv((await $.mv((await $.v(C, "clients2")), "edit15")), "text")), " "), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit16")), "text"))), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit15")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit16")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit18")), "text")), (await $.call(C, "datetostr", [(await $.mv((await $.mv((await $.v(C, "clients2")), "DateTimePicker7")), "DateTime"))])), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit17")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit27")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit20")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit19")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit22")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox4")), "text")), (await $.mv((await $.v(C, "DBLookupComboboxEh2")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "dbedit18")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox1")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox12")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit28")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "DateTimePicker5")), "DateTime")), (await $.mv((await $.mv((await $.v(C, "clients2")), "DateTimePicker8")), "DateTime")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit26")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit23")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox2")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit25")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit2")), "text")), L0["urg"], (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit21")), "Text")), L0["kr"], (await $.mv((await $.mv((await $.v(C, "clients2")), "Edit14")), "Text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox11")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "ComboBox10")), "text")), (await $.mv((await $.mv((await $.v(C, "clients2")), "edit24")), "text")), L0["wt"], (await $.mv((await $.mv((await $.v(C, "clients2")), "DateTimePicker2")), "datetime")), (await $.mv((await $.v(C, "edit3")), "Text"))]])));
      await $.stmt($.call(C, "close", []));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMultiCurrency", "DBLookupComboBox1Change", async function DBLookupComboBox1Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit1")), "Text", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["currencyname"])), "AsString")));
  await $.mset((await $.v(C, "Unitclient2")), "multiacc", (await $.mv((await $.v(C, "DBLookupComboBox1")), "Text")));
  await $.mset((await $.v(C, "Unitclient2")), "multival", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["currencyname"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMultiCurrency", "DBLookupComboboxEh2Change", async function DBLookupComboboxEh2Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "edit2")), "Text", (await $.mv((await $.mcall((await $.v(C, "OracleDataSet1")), "FieldByName", ["currencyname"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMultiCurrency", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TMultiCurrency", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "OracleDataSet1")), "Close", []);
  await $.stmt((await $.mcall((await $.v(C, "OracleDataSet1")), "SetVariable", ["CID", (await $.mv((await $.mv((await $.v(C, "clients2")), "edit14")), "text"))])));
  await $.stmt((await $.mcall((await $.v(C, "OracleDataSet1")), "SetVariable", ["p_AccNO", (await $.v(C, "null"))])));
  await $.mcall((await $.v(C, "OracleDataSet1")), "open", []);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
