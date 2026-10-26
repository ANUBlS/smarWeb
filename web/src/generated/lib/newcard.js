// Generated from newcard.pas by pas2js — do not edit by hand; regenerate instead.
/* eslint-disable */
// @ts-nocheck

export default function define($) {
  const U = $.unit("newcard", ["Windows", "Messages", "SysUtils", "Classes", "Graphics", "Controls", "Forms", "Dialogs", "StdCtrls", "ComCtrls", "Grids", "DBGrids", "DBCtrls", "Mask", "DBCtrlsEh", "Db", "SearchEdit", "Variants", "balans", "CARDS_TLB", "customers", "MAINFORMImpl1", "payment", "Unit18", "applicationpas", "cfilepas", "creditinfopas", "dpforms", "atmendpos", "balhs", "banksettings", "comp", "crdtype", "datclose", "domesticbank", "filialaccounts", "rezform", "setac", "U9", "SBTranslateProc", "sboapiDataModuleImpl"]);
  const C = [U];
  U.defClass("TCustomer_new", "TForm", {"edit1": {"name": "Edit1", "type": "TEdit"}, "button1": {"name": "Button1", "type": "TButton"}, "button2": {"name": "Button2", "type": "TButton"}, "button3": {"name": "Button3", "type": "TButton"}, "button4": {"name": "Button4", "type": "TButton"}, "datetimepicker1": {"name": "DateTimePicker1", "type": "TDateTimePicker"}, "datetimepicker2": {"name": "DateTimePicker2", "type": "TDateTimePicker"}, "dbedit1": {"name": "DBEdit1", "type": "TDBEdit"}, "dbedit2": {"name": "DBEdit2", "type": "TDBEdit"}, "dbedit3": {"name": "DBEdit3", "type": "TDBEdit"}, "dbedit4": {"name": "DBEdit4", "type": "TDBEdit"}, "dbgrid1": {"name": "DBGrid1", "type": "TDBGrid"}, "dbgrid2": {"name": "DBGrid2", "type": "TDBGrid"}, "dbgrid3": {"name": "DBGrid3", "type": "TDBGrid"}, "edit2": {"name": "Edit2", "type": "TEdit"}, "edit3": {"name": "Edit3", "type": "TEdit"}, "edit4": {"name": "Edit4", "type": "TEdit"}, "edit5": {"name": "Edit5", "type": "TEdit"}, "edit6": {"name": "Edit6", "type": "TEdit"}, "combobox10": {"name": "ComboBox10", "type": "TComboBox"}, "datetimepicker3": {"name": "DateTimePicker3", "type": "TDateTimePicker"}, "button5": {"name": "Button5", "type": "TButton"}, "edit7": {"name": "Edit7", "type": "TEdit"}, "edit8": {"name": "Edit8", "type": "TEdit"}, "combobox6": {"name": "ComboBox6", "type": "TComboBox"}, "edit9": {"name": "Edit9", "type": "TEdit"}, "combobox7": {"name": "ComboBox7", "type": "TComboBox"}, "checkbox1": {"name": "CheckBox1", "type": "TCheckBox"}, "edit12": {"name": "Edit12", "type": "TEdit"}, "combobox8": {"name": "ComboBox8", "type": "TComboBox"}, "combobox9": {"name": "ComboBox9", "type": "TComboBox"}, "label1": {"name": "Label1", "type": "TLabel"}, "label2": {"name": "Label2", "type": "TLabel"}, "label3": {"name": "Label3", "type": "TLabel"}, "label4": {"name": "Label4", "type": "TLabel"}, "label5": {"name": "Label5", "type": "TLabel"}, "label6": {"name": "Label6", "type": "TLabel"}, "label7": {"name": "Label7", "type": "TLabel"}, "label8": {"name": "Label8", "type": "TLabel"}, "label10": {"name": "Label10", "type": "TLabel"}, "label11": {"name": "Label11", "type": "TLabel"}, "label12": {"name": "Label12", "type": "TLabel"}, "label13": {"name": "Label13", "type": "TLabel"}, "label14": {"name": "Label14", "type": "TLabel"}, "label15": {"name": "Label15", "type": "TLabel"}, "label16": {"name": "Label16", "type": "TLabel"}, "label17": {"name": "Label17", "type": "TLabel"}, "label18": {"name": "Label18", "type": "TLabel"}, "label19": {"name": "Label19", "type": "TLabel"}, "label20": {"name": "Label20", "type": "TLabel"}, "label21": {"name": "Label21", "type": "TLabel"}, "label22": {"name": "Label22", "type": "TLabel"}, "label23": {"name": "Label23", "type": "TLabel"}, "label24": {"name": "Label24", "type": "TLabel"}, "label25": {"name": "Label25", "type": "TLabel"}, "label26": {"name": "Label26", "type": "TLabel"}, "label27": {"name": "Label27", "type": "TLabel"}, "label28": {"name": "Label28", "type": "TLabel"}, "label29": {"name": "Label29", "type": "TLabel"}, "label30": {"name": "Label30", "type": "TLabel"}, "label31": {"name": "Label31", "type": "TLabel"}, "label32": {"name": "Label32", "type": "TLabel"}, "label33": {"name": "Label33", "type": "TLabel"}, "dblookupcombobox1": {"name": "DBLookupComboBox1", "type": "TDBLookupComboBox"}, "cardnumber": {"name": "cardnumber", "type": "TDBEdit"}, "dblookupcombobox2": {"name": "DBLookupComboBox2", "type": "TDBLookupComboBox"}, "dblookupcombobox4": {"name": "DBLookupComboBox4", "type": "TDBLookupComboBox"}, "datetimepicker4": {"name": "DateTimePicker4", "type": "TDateTimePicker"}, "dbgrid4": {"name": "DBGrid4", "type": "TDBGrid"}, "combobox2": {"name": "ComboBox2", "type": "TComboBox"}, "label34": {"name": "Label34", "type": "TLabel"}, "dbedit5": {"name": "DBEdit5", "type": "TDBEdit"}, "dbdatetimeediteh1": {"name": "DBDateTimeEditEh1", "type": "TDBDateTimeEditEh"}, "dbdatetimeediteh2": {"name": "DBDateTimeEditEh2", "type": "TDBDateTimeEditEh"}, "dbdatetimeediteh3": {"name": "DBDateTimeEditEh3", "type": "TDBDateTimeEditEh"}, "dbedit6": {"name": "DBEdit6", "type": "TDBEdit"}, "dbedit7": {"name": "DBEdit7", "type": "TDBEdit"}, "dbedit8": {"name": "DBEdit8", "type": "TDBEdit"}, "dbdatetimeediteh4": {"name": "DBDateTimeEditEh4", "type": "TDBDateTimeEditEh"}, "dbedit9": {"name": "DBEdit9", "type": "TDBEdit"}, "dbedit10": {"name": "DBEdit10", "type": "TDBEdit"}, "dbedit11": {"name": "DBEdit11", "type": "TDBEdit"}, "dbedit12": {"name": "DBEdit12", "type": "TDBEdit"}, "dbedit13": {"name": "DBEdit13", "type": "TDBEdit"}, "dbedit14": {"name": "DBEdit14", "type": "TDBEdit"}, "edit16": {"name": "Edit16", "type": "TEdit"}, "edit17": {"name": "Edit17", "type": "TEdit"}, "edit18": {"name": "Edit18", "type": "TEdit"}, "dbdatetimeediteh5": {"name": "DBDateTimeEditEh5", "type": "TDBDateTimeEditEh"}, "edit19": {"name": "Edit19", "type": "TEdit"}, "edit20": {"name": "Edit20", "type": "TEdit"}, "edit21": {"name": "Edit21", "type": "TEdit"}, "edit22": {"name": "Edit22", "type": "TEdit"}, "edit23": {"name": "Edit23", "type": "TEdit"}, "edit24": {"name": "Edit24", "type": "TEdit"}, "edit25": {"name": "Edit25", "type": "TEdit"}, "edit26": {"name": "Edit26", "type": "TEdit"}, "combobox4": {"name": "ComboBox4", "type": "TComboBox"}, "combobox5": {"name": "ComboBox5", "type": "TComboBox"}, "dblookupcombobox10": {"name": "DBLookupComboBox10", "type": "TDBLookupComboBox"}, "edit27": {"name": "Edit27", "type": "TEdit"}, "dbedit18": {"name": "DBEdit18", "type": "TDBEdit"}, "dblookupcombobox6": {"name": "DBLookupComboBox6", "type": "TDBLookupComboBox"}, "edit14": {"name": "Edit14", "type": "TEdit"}, "memo1": {"name": "Memo1", "type": "TMemo"}, "edit15": {"name": "Edit15", "type": "TEdit"}, "combobox11": {"name": "ComboBox11", "type": "TComboBox"}, "combobox12": {"name": "ComboBox12", "type": "TComboBox"}, "datetimepicker5": {"name": "DateTimePicker5", "type": "TDateTimePicker"}, "datetimepicker6": {"name": "DateTimePicker6", "type": "TDateTimePicker"}, "datetimepicker7": {"name": "DateTimePicker7", "type": "TDateTimePicker"}, "datetimepicker8": {"name": "DateTimePicker8", "type": "TDateTimePicker"}, "edit28": {"name": "Edit28", "type": "TEdit"}, "label9": {"name": "Label9", "type": "TLabel"}, "dbedit17": {"name": "DBEdit17", "type": "TDBEdit"}, "label35": {"name": "Label35", "type": "TLabel"}, "checkbox2": {"name": "CheckBox2", "type": "TCheckBox"}, "label36": {"name": "Label36", "type": "TLabel"}, "checkbox3": {"name": "CheckBox3", "type": "TCheckBox"}, "edit29": {"name": "Edit29", "type": "TEdit"}, "dbgrid5": {"name": "DBGrid5", "type": "TDBGrid"}, "dbgrid6": {"name": "DBGrid6", "type": "TDBGrid"}, "edit30": {"name": "Edit30", "type": "TEdit"}, "edit31": {"name": "Edit31", "type": "TEdit"}, "edit32": {"name": "Edit32", "type": "TEdit"}, "edit33": {"name": "Edit33", "type": "TEdit"}}, {});
  U.init(async () => {
    U.var_("Customer_new", null, "TCustomer_new");
  });
  U.method("TCustomer_new", "FormCreate", async function FormCreate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mushteriler")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "Close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["CID", (await $.v(C, "null"))])));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["p_AccNO", "%%"])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "Open", []);
  await $.stmt((await $.mcall((await $.v(C, "SBTranslateProc")), "TranslateAllCompForms", [Self, (await $.mv((await $.v(C, "sboapiDataModule")), "OrPack_SL"))])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "Button4Click", async function Button4Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt($.call(C, "close", []));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "FormActivate", async function FormActivate(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "z": 0, "acc": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit1")), "Text")), "NEW"))) {
    await $.mset((await $.v(C, "CheckBox1")), "Enabled", true);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", true);
    await $.mset((await $.v(C, "CheckBox3")), "Enabled", true);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "Close", []);
    await $.mset((await $.v(C, "DBGrid5")), "Enabled", false);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "Open", []);
    await $.mset((await $.v(C, "Edit33")), "Visible", false);
    await $.mset((await $.v(C, "Button3")), "Enabled", false);
    await $.mset((await $.v(C, "Button5")), "Enabled", false);
    await $.mset((await $.v(C, "DBEdit11")), "Text", "");
    await $.mset((await $.v(C, "DBEdit3")), "Text", "");
    await $.mset((await $.v(C, "dbedit18")), "Text", "");
    await $.mset((await $.v(C, "DateTimePicker5")), "DateTime", (await $.v(C, "Date")));
    await $.mset((await $.v(C, "DateTimePicker8")), "DateTime", $.add((await $.v(C, "Date")), 365));
    await $.mset((await $.v(C, "DateTimePicker6")), "DateTime", (await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")));
    await $.stmt((await $.call(C, "ActivateKeyboardLayout", [(await $.call(C, "LoadKeyboardLayout", ["00000409", 0])), 0])));
    await $.mset((await $.v(C, "ComboBox11")), "ItemIndex", 0);
    await $.mset((await $.v(C, "ComboBox12")), "ItemIndex", 0);
    await $.mset((await $.v(C, "ComboBox5")), "ItemIndex", 0);
    await $.mset((await $.v(C, "ComboBox4")), "ItemIndex", 0);
    await $.mset((await $.v(C, "DBLookupComboBox10")), "KeyValue", 0);
    await $.mset((await $.v(C, "edit14")), "Text", "");
    await $.mset((await $.v(C, "DBEdit4")), "Visible", true);
    await $.mset((await $.v(C, "Edit28")), "Visible", false);
    await $.mset((await $.v(C, "Edit15")), "Visible", true);
    await $.mset((await $.v(C, "Edit16")), "Visible", true);
    await $.mset((await $.v(C, "Edit17")), "Visible", true);
    await $.mset((await $.v(C, "Edit27")), "Visible", true);
    await $.mset((await $.v(C, "Edit18")), "Visible", true);
    await $.mset((await $.v(C, "Edit20")), "Visible", true);
    await $.mset((await $.v(C, "Edit21")), "Visible", true);
    await $.mset((await $.v(C, "Edit19")), "Visible", true);
    await $.mset((await $.v(C, "Edit22")), "Visible", true);
    await $.mset((await $.v(C, "DBLookupComboBox10")), "Visible", true);
    await $.mset((await $.v(C, "ComboBox5")), "Visible", true);
    await $.mset((await $.v(C, "ComboBox4")), "Visible", true);
    await $.mset((await $.v(C, "Edit26")), "Visible", true);
    await $.mset((await $.v(C, "Edit25")), "Visible", true);
    await $.mset((await $.v(C, "Edit24")), "Visible", true);
    await $.mset((await $.v(C, "Edit23")), "Visible", true);
    await $.mset((await $.v(C, "ComboBox2")), "Visible", true);
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "clienapp")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "clienapp")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CUSTINFO")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "custaccount")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "valuta")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "allclientdepozits")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "allclientdepozits")), "SetVariable", ["HESAB", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["rbsnumber"])), "asstring"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "allclientcredits")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1")), "Text")), "NEW"))) {
    await $.mset((await $.v(C, "Edit2")), "Text", "");
    await $.mset((await $.v(C, "Edit3")), "Text", "");
    await $.mset((await $.v(C, "Edit4")), "Text", "");
    await $.mset((await $.v(C, "Edit5")), "Text", "");
    await $.mset((await $.v(C, "Edit6")), "Text", "");
    await $.mset((await $.v(C, "Edit9")), "Text", "");
    await $.mset((await $.v(C, "Edit12")), "Text", "");
    await $.mset((await $.v(C, "ComboBox2")), "Visible", true);
    await $.mset((await $.v(C, "DateTimePicker7")), "Visible", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Visible", true);
    await $.mset((await $.v(C, "DBLookupComboBox10")), "Visible", true);
    await $.mset((await $.v(C, "DBLookupComboBox4")), "Visible", false);
    await $.mset((await $.v(C, "DBGrid1")), "Enabled", false);
    await $.mset((await $.v(C, "DBEDIT1")), "VISIBLE", false);
    await $.mset((await $.v(C, "EDIT14")), "VISIBLE", true);
    await $.mset((await $.v(C, "DBEDIT2")), "VISIBLE", false);
    await $.mset((await $.v(C, "DBEDIT18")), "VISIBLE", true);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "VISIBLE", true);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "VISIBLE", false);
    await $.mset((await $.v(C, "Edit29")), "Visible", false);
    await $.mset((await $.v(C, "DBEDIT4")), "VISIBLE", false);
    await $.mset((await $.v(C, "EDIT28")), "VISIBLE", true);
    await $.mset((await $.v(C, "COMBOBOX11")), "VISIBLE", true);
    await $.mset((await $.v(C, "DBLookupComboBox2")), "VISIBLE", false);
    await $.mset((await $.v(C, "COMBOBOX12")), "VISIBLE", true);
    await $.mset((await $.v(C, "Edit25")), "Visible", true);
    await $.mset((await $.v(C, "ComboBox4")), "Visible", true);
    await $.mset((await $.v(C, "ComboBox6")), "Visible", false);
    await $.mset((await $.v(C, "DBEdit9")), "Visible", true);
    await $.mset((await $.v(C, "Edit2")), "Visible", false);
    await $.mset((await $.v(C, "Edit3")), "Visible", false);
    await $.mset((await $.v(C, "Edit4")), "Visible", false);
    await $.mset((await $.v(C, "Edit5")), "Visible", false);
    await $.mset((await $.v(C, "Edit6")), "Visible", false);
    await $.mset((await $.v(C, "Edit9")), "Visible", false);
    await $.mset((await $.v(C, "Edit12")), "Visible", false);
    await $.mset((await $.v(C, "DateTimePicker4")), "Visible", false);
    await $.mset((await $.v(C, "EDIT27")), "Visible", true);
    await $.mset((await $.v(C, "EDIT17")), "Visible", true);
    await $.mset((await $.v(C, "EDIT4")), "Visible", false);
    await $.mset((await $.v(C, "EDIT5")), "Visible", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1")), "Text")), "EDIT"))) {
    await $.mset((await $.v(C, "CheckBox1")), "Enabled", false);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", false);
    await $.mset((await $.v(C, "CheckBox3")), "Enabled", false);
    await $.mset((await $.v(C, "DBDateTimeEditEh4")), "DataSource", (await $.mv((await $.v(C, "DataMod_CARDS")), "ClientListSource")));
    await $.mset((await $.v(C, "DBDateTimeEditEh4")), "DataField", "BIRTHDAY");
    await $.mset((await $.v(C, "cardnumber")), "DataSource", (await $.mv((await $.v(C, "DataMod_CARDS")), "ClientListSource")));
    await $.mset((await $.v(C, "cardnumber")), "DataField", "CARDNUMBER");
    await $.mset((await $.v(C, "DBLookupComboBox4")), "DataSource", (await $.mv((await $.v(C, "DataMod_CARDS")), "ClientListSource")));
    await $.mset((await $.v(C, "DBLookupComboBox4")), "DataField", "CARDTYPE");
    await $.mset((await $.v(C, "Edit30")), "Visible", false);
    await $.mset((await $.v(C, "DBGrid5")), "Enabled", true);
    await $.mset((await $.v(C, "CheckBox3")), "Enabled", false);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", false);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "SetVariable", ["RBS", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["RBSNUMBER"])), "ASSTRING"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "Open", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cariqaliq2")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cariqaliq2")), "SetVariable", ["acc_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["ACCID"])), "Asinteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cariqaliq2")), "Open", []);
    await $.mset((await $.v(C, "Edit33")), "Visible", true);
    await $.mset((await $.v(C, "Edit33")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cariqaliq2")), "fieldbyname", ["ostat"])), "asstring")));
    await $.mset((await $.v(C, "Edit33")), "Enabled", false);
    await $.mset((await $.v(C, "Edit15")), "Visible", false);
    await $.mset((await $.v(C, "Edit16")), "Visible", false);
    await $.mset((await $.v(C, "Edit18")), "Visible", false);
    await $.mset((await $.v(C, "Edit20")), "Visible", false);
    await $.mset((await $.v(C, "Edit21")), "Visible", false);
    await $.mset((await $.v(C, "Edit19")), "Visible", false);
    await $.mset((await $.v(C, "Edit22")), "Visible", false);
    await $.mset((await $.v(C, "Edit23")), "Visible", false);
    await $.mset((await $.v(C, "combobox5")), "Visible", false);
    await $.mset((await $.v(C, "ComboBox2")), "Visible", false);
    await $.mset((await $.v(C, "DateTimePicker7")), "Visible", false);
    await $.mset((await $.v(C, "DateTimePicker8")), "Visible", false);
    await $.mset((await $.v(C, "DBLookupComboBox10")), "Visible", false);
    await $.mset((await $.v(C, "DBLookupComboBox4")), "Visible", true);
    await $.mset((await $.v(C, "DBGrid1")), "Enabled", true);
    await $.mset((await $.v(C, "DBEDIT1")), "VISIBLE", true);
    await $.mset((await $.v(C, "EDIT14")), "VISIBLE", false);
    await $.mset((await $.v(C, "DBEDIT2")), "VISIBLE", false);
    await $.mset((await $.v(C, "DBEdit18")), "Visible", true);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "VISIBLE", false);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "VISIBLE", true);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "editval")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "editval")), "SetVariable", ["RBSNUMBER", (await $.mv((await $.v(C, "DBLookupComboBox1")), "text"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "editval")), "Open", []);
    await $.mset((await $.v(C, "Edit29")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "editval")), "fieldbyname", ["VAL_NAME"])), "asstring")));
    await $.mset((await $.v(C, "Edit29")), "Visible", true);
    await $.mset((await $.v(C, "DBEDIT4")), "VISIBLE", true);
    await $.mset((await $.v(C, "EDIT28")), "VISIBLE", false);
    await $.mset((await $.v(C, "COMBOBOX11")), "VISIBLE", false);
    await $.mset((await $.v(C, "DBLookupComboBox2")), "VISIBLE", true);
    await $.mset((await $.v(C, "COMBOBOX12")), "VISIBLE", false);
    await $.mset((await $.v(C, "Edit25")), "Visible", false);
    await $.mset((await $.v(C, "ComboBox4")), "Visible", false);
    await $.mset((await $.v(C, "ComboBox6")), "Visible", true);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["RESIDENT"])), "AsString")), "RESIDENT"))) {
      await $.mset((await $.v(C, "ComboBox6")), "ItemIndex", 0);
    } else {
      await $.mset((await $.v(C, "ComboBox6")), "ItemIndex", 1);
    }
    await $.mset((await $.v(C, "DBEdit9")), "Visible", false);
    await $.mset((await $.v(C, "Edit2")), "Visible", true);
    await $.mset((await $.v(C, "Edit3")), "Visible", true);
    await $.mset((await $.v(C, "Edit4")), "Visible", true);
    await $.mset((await $.v(C, "Edit5")), "Visible", true);
    await $.mset((await $.v(C, "Edit6")), "Visible", true);
    await $.mset((await $.v(C, "Edit9")), "Visible", true);
    await $.mset((await $.v(C, "Edit12")), "Visible", true);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "SetVariable", ["numb", (await $.mv((await $.v(C, "DBLookupComboBox1")), "text"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "Open", []);
    await $.mset((await $.v(C, "DateTimePicker4")), "Visible", true);
    await $.mset((await $.v(C, "EDIT27")), "Visible", false);
    await $.mset((await $.v(C, "EDIT17")), "Visible", false);
    await $.mset((await $.v(C, "EDIT4")), "Visible", true);
    await $.mset((await $.v(C, "EDIT5")), "Visible", true);
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["urg"])), "asinteger")), 0))) {
      await $.mset((await $.v(C, "CheckBox2")), "Checked", true);
    } else {
      await $.mset((await $.v(C, "CheckBox2")), "Checked", false);
    }
    await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["FNAME"])), "AsString")));
    await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["LNAME"])), "AsString")));
    await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["HOMEPHONE"])), "AsString")));
    await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["WORKPHONE"])), "AsString")));
    await $.mset((await $.v(C, "Edit6")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["PASSPORT"])), "AsString")));
    await $.mset((await $.v(C, "Edit9")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["REFERENCE"])), "AsString")));
    await $.mset((await $.v(C, "Edit12")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["CITY"])), "AsString")));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "SetVariable", ["numb", (await $.mv((await $.v(C, "DBLookupComboBox1")), "text"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "Open", []);
    await $.mset((await $.v(C, "DateTimePicker4")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["EXPIRY"])), "AsDATETIME")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "DBLookupComboBox1Click", async function DBLookupComboBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "acc": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t1 = (await $.v(C, "DataMod_CARDS"));
    const $t2 = (await $.wv([$t1], "HESAB", C, false));
    const $t3 = (await $.wv([$t1, $t2], "mushteriler", C, false));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "SetVariable", ["CID", (await $.wv([$t1, $t2, $t3], "null", C, false))], C)));
    await $.stmt((await $.wcall([$t1, $t2, $t3], "SetVariable", ["p_AccNO", $.add((await $.mv((await $.wv([$t1, $t2, $t3], "dblookupcombobox1", C, false)), "Text")), "%")], C)));
  }
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "RecordCount")), 0))) {
    L0["acc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "FieldByName", ["ACC_NO"])), "asVariant"));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mushteriler")), "Locate", ["ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "Fieldbyname", ["KLI_ID"])), "AsInteger")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "Locate", ["ACC", L0["acc"], [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "Button1Click", async function Button1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_client_new"]])));
  await $.mset((await $.v(C, "Edit1")), "Text", "NEW");
  await $.mset((await $.v(C, "ComboBox9")), "Enabled", false);
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit1")), "Text")), "NEW"))) {
    await $.mset((await $.v(C, "Edit33")), "Visible", false);
    await $.mset((await $.v(C, "CheckBox1")), "Enabled", true);
    await $.mset((await $.v(C, "CheckBox2")), "Enabled", true);
    await $.mset((await $.v(C, "CheckBox3")), "Enabled", true);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "Close", []);
    await $.mset((await $.v(C, "DBGrid5")), "Enabled", false);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "Open", []);
    await $.mset((await $.v(C, "Button3")), "Enabled", false);
    await $.mset((await $.v(C, "Button5")), "Enabled", false);
    await $.mset((await $.v(C, "DBEdit11")), "Text", "");
    await $.mset((await $.v(C, "DBEdit3")), "Text", "");
    await $.mset((await $.v(C, "dbedit18")), "Text", "");
    await $.mset((await $.v(C, "DateTimePicker5")), "DateTime", (await $.v(C, "Date")));
    await $.mset((await $.v(C, "DateTimePicker8")), "DateTime", $.add((await $.v(C, "Date")), 365));
    await $.mset((await $.v(C, "DateTimePicker6")), "DateTime", (await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")));
    await $.stmt((await $.call(C, "ActivateKeyboardLayout", [(await $.call(C, "LoadKeyboardLayout", ["00000409", 0])), 0])));
    await $.mset((await $.v(C, "ComboBox11")), "ItemIndex", 0);
    await $.mset((await $.v(C, "ComboBox12")), "ItemIndex", 0);
    await $.mset((await $.v(C, "ComboBox5")), "ItemIndex", 0);
    await $.mset((await $.v(C, "ComboBox4")), "ItemIndex", 0);
    await $.mset((await $.v(C, "DBLookupComboBox10")), "KeyValue", 0);
    await $.mset((await $.v(C, "edit14")), "Text", "");
    await $.mset((await $.v(C, "DBEdit4")), "Visible", true);
    await $.mset((await $.v(C, "Edit28")), "Visible", false);
    await $.mset((await $.v(C, "Edit15")), "Visible", true);
    await $.mset((await $.v(C, "Edit16")), "Visible", true);
    await $.mset((await $.v(C, "Edit17")), "Visible", true);
    await $.mset((await $.v(C, "Edit27")), "Visible", true);
    await $.mset((await $.v(C, "Edit18")), "Visible", true);
    await $.mset((await $.v(C, "Edit20")), "Visible", true);
    await $.mset((await $.v(C, "Edit21")), "Visible", true);
    await $.mset((await $.v(C, "Edit19")), "Visible", true);
    await $.mset((await $.v(C, "Edit22")), "Visible", true);
    await $.mset((await $.v(C, "DBLookupComboBox10")), "Visible", true);
    await $.mset((await $.v(C, "ComboBox5")), "Visible", true);
    await $.mset((await $.v(C, "ComboBox4")), "Visible", true);
    await $.mset((await $.v(C, "Edit26")), "Visible", true);
    await $.mset((await $.v(C, "Edit25")), "Visible", true);
    await $.mset((await $.v(C, "Edit24")), "Visible", true);
    await $.mset((await $.v(C, "Edit23")), "Visible", true);
    await $.mset((await $.v(C, "ComboBox2")), "Visible", true);
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "clienapp")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "clienapp")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CUSTINFO")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "custaccount")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "valuta")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "allclientdepozits")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "allclientdepozits")), "SetVariable", ["HESAB", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["rbsnumber"])), "asstring"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "allclientcredits")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1")), "Text")), "NEW"))) {
    await $.mset((await $.v(C, "Edit2")), "Text", "");
    await $.mset((await $.v(C, "Edit3")), "Text", "");
    await $.mset((await $.v(C, "Edit4")), "Text", "");
    await $.mset((await $.v(C, "Edit5")), "Text", "");
    await $.mset((await $.v(C, "Edit6")), "Text", "");
    await $.mset((await $.v(C, "Edit9")), "Text", "");
    await $.mset((await $.v(C, "Edit12")), "Text", "");
    await $.mset((await $.v(C, "ComboBox2")), "Visible", true);
    await $.mset((await $.v(C, "DateTimePicker7")), "Visible", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Visible", true);
    await $.mset((await $.v(C, "DBLookupComboBox10")), "Visible", true);
    await $.mset((await $.v(C, "DBLookupComboBox4")), "Visible", false);
    await $.mset((await $.v(C, "DBGrid1")), "Enabled", false);
    await $.mset((await $.v(C, "DBEDIT1")), "VISIBLE", false);
    await $.mset((await $.v(C, "EDIT14")), "VISIBLE", true);
    await $.mset((await $.v(C, "DBEDIT2")), "VISIBLE", true);
    await $.mset((await $.v(C, "DBEdit18")), "Visible", false);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "VISIBLE", true);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "VISIBLE", false);
    await $.mset((await $.v(C, "Edit29")), "Visible", false);
    await $.mset((await $.v(C, "DBEDIT4")), "VISIBLE", false);
    await $.mset((await $.v(C, "EDIT28")), "VISIBLE", true);
    await $.mset((await $.v(C, "COMBOBOX11")), "VISIBLE", true);
    await $.mset((await $.v(C, "DBLookupComboBox2")), "VISIBLE", false);
    await $.mset((await $.v(C, "COMBOBOX12")), "VISIBLE", true);
    await $.mset((await $.v(C, "Edit25")), "Visible", true);
    await $.mset((await $.v(C, "ComboBox4")), "Visible", true);
    await $.mset((await $.v(C, "ComboBox6")), "Visible", false);
    await $.mset((await $.v(C, "DBEdit9")), "Visible", true);
    await $.mset((await $.v(C, "Edit2")), "Visible", false);
    await $.mset((await $.v(C, "Edit3")), "Visible", false);
    await $.mset((await $.v(C, "Edit4")), "Visible", false);
    await $.mset((await $.v(C, "Edit5")), "Visible", false);
    await $.mset((await $.v(C, "Edit6")), "Visible", false);
    await $.mset((await $.v(C, "Edit9")), "Visible", false);
    await $.mset((await $.v(C, "Edit12")), "Visible", false);
    await $.mset((await $.v(C, "DateTimePicker4")), "Visible", false);
    await $.mset((await $.v(C, "EDIT27")), "Visible", true);
    await $.mset((await $.v(C, "EDIT17")), "Visible", true);
    await $.mset((await $.v(C, "EDIT4")), "Visible", false);
    await $.mset((await $.v(C, "EDIT5")), "Visible", false);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "DBGrid1DblClick", async function DBGrid1DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "allclientcredits")), "RecordCount")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "krinfo")), "CM_ACTIVE")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "krinfo")), "CM_ACTIVE")), "SetVariable", ["ids", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "allclientcredits")), "fieldbyname", ["id"])), "asinteger"))])));
    await $.mcall((await $.mv((await $.v(C, "krinfo")), "CM_ACTIVE")), "Open", []);
    await $.mcall((await $.v(C, "krinfo")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "DBGrid2DblClick", async function DBGrid2DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "allclientdepozits")), "RecordCount")), 0))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "depozit")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "depozit")), "SetVariable", ["hesab", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["rbsnumber"])), "asstring"))])));
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "depozit")), "SetVariable", ["aid", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "allclientdepozits")), "fieldbyname", ["id"])), "asinteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "depozit")), "Open", []);
    await $.mcall((await $.v(C, "dpinfo")), "ShowModal", []);
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "Button3Click", async function Button3Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_client_edit"]])));
  await $.mset((await $.v(C, "Edit31")), "Visible", false);
  await $.mset((await $.v(C, "Edit32")), "Text", "1");
  await $.mset((await $.v(C, "Button3")), "Enabled", true);
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["FNAME"])), "AsString")));
  await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["LNAME"])), "AsString")));
  await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["HOMEPHONE"])), "AsString")));
  await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["WORKPHONE"])), "AsString")));
  await $.mset((await $.v(C, "Edit6")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["PASSPORT"])), "AsString")));
  await $.mset((await $.v(C, "Edit9")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["REFERENCE"])), "AsString")));
  await $.mset((await $.v(C, "Edit12")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["CITY"])), "AsString")));
  await $.mset((await $.v(C, "DBDateTimeEditEh4")), "DataSource", (await $.mv((await $.v(C, "DataMod_CARDS")), "clientappsource")));
  await $.mset((await $.v(C, "DBDateTimeEditEh4")), "DataField", "BIRTHDAY");
  await $.mset((await $.v(C, "cardnumber")), "DataSource", (await $.mv((await $.v(C, "DataMod_CARDS")), "clientappsource")));
  await $.mset((await $.v(C, "cardnumber")), "DataField", "CARDNUMBER");
  await $.mset((await $.v(C, "DBLookupComboBox4")), "DataSource", (await $.mv((await $.v(C, "DataMod_CARDS")), "clientappsource")));
  await $.mset((await $.v(C, "DBLookupComboBox4")), "DataField", "CARDTYPE");
  await $.mset((await $.v(C, "DBLookupComboBox4")), "Visible", false);
  await $.mset((await $.v(C, "Edit30")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["CARDTYPE"])), "AsString")));
  await $.mset((await $.v(C, "Edit30")), "Visible", true);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["RESIDENT"])), "AsString")), "RESIDENT"))) {
    await $.mset((await $.v(C, "ComboBox6")), "ItemIndex", 0);
  } else {
    await $.mset((await $.v(C, "ComboBox6")), "ItemIndex", 1);
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["urg"])), "asinteger")), 0))) {
    await $.mset((await $.v(C, "CheckBox2")), "Checked", true);
  } else {
    await $.mset((await $.v(C, "CheckBox2")), "Checked", false);
  }
  await $.mset((await $.v(C, "DateTimePicker4")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["EXPIRY"])), "AsDATETIME")));
  await $.mset((await $.v(C, "DBDateTimeEditEh3")), "DataSource", (await $.mv((await $.v(C, "DataMod_CARDS")), "clientcardssource")));
  await $.mset((await $.v(C, "ComboBox9")), "Enabled", true);
  await $.mset((await $.v(C, "Edit1")), "Text", "EDIT");
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "DBLookupComboBox6Enter", async function DBLookupComboBox6Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "acc": ''};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "DBLookupComboBox6Click", async function DBLookupComboBox6Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "acc": ''};
  await $.fixArgs(L0, ["sender"]);
  {
    const $t4 = (await $.v(C, "DataMod_CARDS"));
    const $t5 = (await $.wv([$t4], "HESAB", C, false));
    await $.stmt((await $.wcall([$t4, $t5], "SetVariable", ["CID", (await $.wv([$t4, $t5], "null", C, false))], C)));
    await $.stmt((await $.wcall([$t4, $t5], "SetVariable", ["p_AccNO", $.add((await $.mv((await $.wv([$t4, $t5], "dblookupcombobox6", C, false)), "Text")), "%")], C)));
  }
  L0["acc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "FieldByName", ["ACC_NO"])), "asVariant"));
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mushteriler")), "Locate", ["ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "Fieldbyname", ["KLI_ID"])), "AsInteger")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
  await $.mset((await $.v(C, "Edit14")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mushteriler")), "fieldbyname", ["id"])), "AsString")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "SearchEdit1KeyPress", async function SearchEdit1KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    {
      const $t6 = (await $.v(C, "DataMod_CARDS"));
      const $t7 = (await $.wv([$t6], "HESAB", C, false));
      await $.stmt($.wcall([$t6, $t7], "Close", [], C));
      await $.stmt((await $.wcall([$t6, $t7], "SetVariable", ["CID", (await $.wv([$t6, $t7], "null", C, false))], C)));
      await $.stmt((await $.wcall([$t6, $t7], "SetVariable", ["p_AccNO", (await $.wv([$t6, $t7], "null", C, false))], C)));
      await $.stmt($.wcall([$t6, $t7], "Open", [], C));
      await $.stmt((await $.wcall([$t6, $t7], "ShowMessage", ["ozzun"], C)));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomer_new", "DBLookupComboBox6KeyPress", async function DBLookupComboBox6KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "acc": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    {
      const $t8 = (await $.v(C, "DataMod_CARDS"));
      const $t9 = (await $.wv([$t8], "HESAB", C, false));
      await $.stmt((await $.wcall([$t8, $t9], "SetVariable", ["CID", (await $.wv([$t8, $t9], "null", C, false))], C)));
      await $.stmt((await $.wcall([$t8, $t9], "SetVariable", ["p_AccNO", $.add((await $.mv((await $.wv([$t8, $t9], "dblookupcombobox6", C, false)), "Text")), "%")], C)));
    }
    if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "RecordCount")), 0))) {
      L0["acc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "FieldByName", ["ACC_NO"])), "asVariant"));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mushteriler")), "Locate", ["ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "Fieldbyname", ["KLI_ID"])), "AsInteger")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "Locate", ["ACC_no", L0["acc"], [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomer_new", "Edit14KeyPress", async function Edit14KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined, "acc": null};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await L0["key"].get()), "\r"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "Edit14")), "Text")), ""))) {
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["CID", (await $.v(C, "null"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["p_AccNO", "%%"])));
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "Open", []);
    } else {
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "Close", []);
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["CID", (await $.mv((await $.v(C, "Edit14")), "Text"))])));
      await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "SetVariable", ["p_AccNO", (await $.v(C, "null"))])));
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "Open", []);
      if ($.truthy($.gt((await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "RecordCount")), 0))) {
        L0["acc"] = (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "hesab")), "FieldByName", ["ACC_NO"])), "asVariant"));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mushteriler")), "Locate", ["ID", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "Fieldbyname", ["KLI_ID"])), "AsInteger")), [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "HESAB")), "Locate", ["ACC_no", L0["acc"], [(await $.v(C, "loCaseInsensitive")), (await $.v(C, "loPartialKey"))]])));
      }
    }
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomer_new", "ComboBox11KeyPress", async function ComboBox11KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomer_new", "Edit15KeyPress", async function Edit15KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.gt((await $.call(C, "ORD", [(await L0["key"].get())])), 126))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), 63))) {
    await L0["key"].set("\u0000");
  }
  await $.stmt((await $.call(C, "ActivateKeyboardLayout", [(await $.call(C, "LoadKeyboardLayout", ["00000409", 0])), 0])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomer_new", "Edit15Change", async function Edit15Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActivateKeyboardLayout", [(await $.call(C, "LoadKeyboardLayout", ["00000409", 0])), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "Edit15Click", async function Edit15Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActivateKeyboardLayout", [(await $.call(C, "LoadKeyboardLayout", ["00000409", 0])), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "Edit15DblClick", async function Edit15DblClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.call(C, "ActivateKeyboardLayout", [(await $.call(C, "LoadKeyboardLayout", ["00000409", 0])), 0])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "Edit28KeyPress", async function Edit28KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.not(($.in_((await L0["key"].get()), ["\b", ...$.range("0","9")]))))) {
    await L0["key"].set("\u0000");
  }
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomer_new", "DateTimePicker8Change", async function DateTimePicker8Change(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "DateTimePicker6")), "DateTime", (await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "ComboBox2KeyPress", async function ComboBox2KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set((await $.call(C, "UpCase", [(await L0["key"].get())])));
  if ($.truthy($.gt((await $.call(C, "ORD", [(await L0["key"].get())])), 126))) {
    await L0["key"].set("\u0000");
  }
  if ($.truthy($.eq((await $.call(C, "ORD", [(await L0["key"].get())])), 63))) {
    await L0["key"].set("\u0000");
  }
  await $.stmt((await $.call(C, "ActivateKeyboardLayout", [(await $.call(C, "LoadKeyboardLayout", ["00000409", 0])), 0])));
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomer_new", "ComboBox4KeyPress", async function ComboBox4KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomer_new", "CheckBox1Click", async function CheckBox1Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy((await $.mv((await $.v(C, "CheckBox1")), "Checked")))) {
    if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox10")), "Text")), ""))) {
      await $.mset((await $.v(C, "Edit23")), "Text", $.add($.add($.add($.add((await $.mv((await $.v(C, "ComboBox10")), "Text")), "/"), (await $.mv((await $.v(C, "Edit15")), "Text"))), "/"), (await $.mv((await $.v(C, "edit16")), "Text"))));
    } else {
      await $.mset((await $.v(C, "Edit23")), "Text", $.add($.add($.add("/", (await $.mv((await $.v(C, "Edit15")), "Text"))), "/"), (await $.mv((await $.v(C, "edit16")), "Text"))));
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "Button2Click", async function Button2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "z": 0, "urg": 0, "kr": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_client_save"]])));
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1")), "Text")), "NEW"))) {
    L0["z"] = 0;
    { const $t10 = $.sub((await $.mv((await $.v(C, "Customer_new")), "ComponentCount")), 1);
      L0["i"] = 0;
      let $t11 = true;
      for (;;) {
        if (!$t11) { L0["i"] = $.succ(L0["i"], 1); }
        $t11 = false;
        if (!($.ord(L0["i"]) <= $.ord($t10))) break;
        if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "Tedit"))))) {
          if ($.truthy($.eq((await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Color")), (await $.v(C, "claqua"))))) {
            if ($.truthy($.eq((await $.mv(((await $.idx((await $.v(C, "Components")), [L0["i"]]))), "Text")), ""))) {
              L0["z"] = 1;
            }
          }
        }
        if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "Tcombobox"))))) {
          if ($.truthy($.eq((await $.mv(((await $.idx((await $.mv((await $.v(C, "Customer_new")), "Components")), [L0["i"]]))), "Color")), (await $.v(C, "claqua"))))) {
            if ($.truthy($.eq((await $.mv(((await $.idx((await $.mv((await $.v(C, "Customer_new")), "Components")), [L0["i"]]))), "text")), ""))) {
              L0["z"] = 1;
            }
          }
        }
        if ($.truthy($.eq((await $.mv((await $.idx((await $.v(C, "Components")), [L0["i"]])), "ClassType")), (await $.v(C, "TDBLookupComboBox"))))) {
          if ($.truthy($.eq((await $.mv(((await $.idx((await $.mv((await $.v(C, "Customer_new")), "Components")), [L0["i"]]))), "Color")), (await $.v(C, "claqua"))))) {
            if ($.truthy($.eq((await $.mv(((await $.idx((await $.mv((await $.v(C, "Customer_new")), "Components")), [L0["i"]]))), "text")), ""))) {
              L0["z"] = 1;
            }
          }
        }
        await $.tick();
      }
    }
    if ($.truthy($.eq(L0["z"], 1))) {
      await $.stmt((await $.call(C, "ShowMessage", ["Rəngli xanalar tam doldurulmalıdır"])));
      return L0.result;
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "DBEdit18")), "Text")), (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDTYPES")), "fieldbyname", ["CURRENCY"])), "AsString"))))) {
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "referens")), "close", []);
      await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "referens")), "open", []);
      await $.mset((await $.v(C, "edit26")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "referens")), "fieldbyname", ["refe"])), "asstring")));
    } else {
      await $.stmt((await $.call(C, "ShowMessage", ["Valyuta sehvdir"])));
      return L0.result;
    }
    if ($.truthy((await $.mv((await $.v(C, "CheckBox2")), "Checked")))) {
      L0["urg"] = 1;
    } else {
      L0["urg"] = 0;
    }
    if ($.truthy((await $.mv((await $.v(C, "CheckBox3")), "Checked")))) {
      L0["kr"] = 1;
    } else {
      L0["kr"] = 0;
    }
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["new_card", [$.add($.add((await $.mv((await $.v(C, "edit15")), "text")), " "), (await $.mv((await $.v(C, "edit16")), "text"))), (await $.mv((await $.v(C, "edit15")), "text")), (await $.mv((await $.v(C, "edit16")), "text")), (await $.mv((await $.v(C, "edit18")), "text")), (await $.call(C, "datetostr", [(await $.mv((await $.v(C, "DateTimePicker7")), "DateTime"))])), (await $.mv((await $.v(C, "Edit17")), "Text")), (await $.mv((await $.v(C, "Edit27")), "Text")), (await $.mv((await $.v(C, "Edit20")), "Text")), (await $.mv((await $.v(C, "Edit19")), "Text")), (await $.mv((await $.v(C, "Edit22")), "Text")), (await $.mv((await $.v(C, "ComboBox4")), "text")), (await $.mv((await $.v(C, "DBLookupComboBox6")), "Text")), (await $.mv((await $.v(C, "DBEdit18")), "Text")), (await $.mv((await $.v(C, "DBLookupComboBox10")), "Text")), (await $.mv((await $.v(C, "ComboBox12")), "text")), (await $.mv((await $.v(C, "Edit28")), "Text")), (await $.mv((await $.v(C, "DateTimePicker5")), "DateTime")), (await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")), (await $.mv((await $.v(C, "Edit26")), "Text")), (await $.mv((await $.v(C, "Edit23")), "Text")), (await $.mv((await $.v(C, "ComboBox2")), "text")), (await $.mv((await $.v(C, "Edit25")), "Text")), 1, L0["urg"], (await $.mv((await $.v(C, "Edit21")), "Text")), L0["kr"], (await $.mv((await $.v(C, "Edit14")), "Text")), (await $.mv((await $.v(C, "ComboBox11")), "text")), (await $.mv((await $.v(C, "ComboBox10")), "text"))]])));
    await $.mset((await $.v(C, "edit15")), "text", "");
    await $.mset((await $.v(C, "edit16")), "text", "");
    await $.mset((await $.v(C, "edit15")), "text", "");
    await $.mset((await $.v(C, "edit16")), "text", "");
    await $.mset((await $.v(C, "edit18")), "text", "");
    await $.mset((await $.v(C, "Edit17")), "Text", "");
    await $.mset((await $.v(C, "Edit27")), "Text", "");
    await $.mset((await $.v(C, "Edit20")), "Text", "");
    await $.mset((await $.v(C, "Edit19")), "Text", "");
    await $.mset((await $.v(C, "Edit22")), "Text", "");
    await $.mset((await $.v(C, "ComboBox4")), "text", "");
    await $.mset((await $.v(C, "DBEdit18")), "Text", "");
    await $.mset((await $.v(C, "ComboBox12")), "text", "");
    await $.mset((await $.v(C, "Edit28")), "Text", "");
    await $.mset((await $.v(C, "Edit26")), "Text", "");
    await $.mset((await $.v(C, "Edit23")), "Text", "");
    await $.mset((await $.v(C, "ComboBox2")), "text", "");
    await $.mset((await $.v(C, "Edit25")), "Text", "");
    await $.mset((await $.v(C, "Edit21")), "Text", "");
    await $.mset((await $.v(C, "Edit14")), "Text", "");
    await $.mset((await $.v(C, "ComboBox11")), "text", "");
    await $.mset((await $.v(C, "ComboBox10")), "text", "");
    await $.stmt((await $.call(C, "ShowMessage", ["Yeni kart əlavə edildi"])));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1")), "Text")), "EDIT"))) {
    if ($.truthy($.eq((await $.mv((await $.v(C, "Edit32")), "Text")), "1"))) {
      await $.mset((await $.v(C, "ComboBox9")), "Enabled", true);
    }
    if ($.truthy($.eq((await $.mv((await $.v(C, "Edit32")), "Text")), "2"))) {
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "FieldByName", ["MESSTYPE"])), "AsInteger")), 2))) {
      }
      if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "Prolongation"))) {
        await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "mainpacket")), "CallProcedure", ["prolongation", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "fieldbyname", ["id"])), "asinteger")), (await $.mv((await $.v(C, "DBDateTimeEditEh3")), "Value"))]])));
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "FieldByName", ["MESSTYPE"])), "AsInteger")), 4))) {
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "FieldByName", ["MESSTYPE"])), "AsInteger")), 12))) {
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "FieldByName", ["MESSTYPE"])), "AsInteger")), 6))) {
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "FieldByName", ["MESSTYPE"])), "AsInteger")), 11))) {
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "FieldByName", ["MESSTYPE"])), "AsInteger")), 7))) {
      }
      if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CARDOPERATION")), "FieldByName", ["MESSTYPE"])), "AsInteger")), 35))) {
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "ComboBox2Click", async function ComboBox2Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "z": 0};
  await $.fixArgs(L0, ["sender"]);
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.func("SupplCard", async function SupplCard(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t12 = (await $.v(C, "Customer_new"));
    await $.mset((await $.wv([$t12], "Edit31", C, false)), "Visible", (await $.wv([$t12], "False", C, false)));
    await $.mset((await $.wv([$t12], "Edit32", C, false)), "Text", "1");
    await $.mset((await $.wv([$t12], "Button3", C, false)), "Enabled", (await $.wv([$t12], "True", C, false)));
    await $.mset((await $.wv([$t12], "Edit2", C, false)), "enabled", (await $.wv([$t12], "true", C, false)));
    await $.mset((await $.wv([$t12], "Edit3", C, false)), "Enabled", (await $.wv([$t12], "true", C, false)));
    await $.mset((await $.wv([$t12], "Edit4", C, false)), "Enabled", (await $.wv([$t12], "true", C, false)));
    await $.mset((await $.wv([$t12], "Edit5", C, false)), "Enabled", (await $.wv([$t12], "true", C, false)));
    await $.mset((await $.wv([$t12], "Edit6", C, false)), "Enabled", (await $.wv([$t12], "true", C, false)));
    await $.mset((await $.wv([$t12], "Edit9", C, false)), "Enabled", (await $.wv([$t12], "true", C, false)));
    await $.mset((await $.wv([$t12], "Edit12", C, false)), "Enabled", (await $.wv([$t12], "true", C, false)));
    await $.mset((await $.wv([$t12], "DBDateTimeEditEh4", C, false)), "Enabled", (await $.wv([$t12], "true", C, false)));
    await $.mset((await $.wv([$t12], "cardnumber", C, false)), "Enabled", (await $.wv([$t12], "true", C, false)));
    await $.mset((await $.wv([$t12], "ComboBox6", C, false)), "Enabled", (await $.wv([$t12], "true", C, false)));
    await $.mset((await $.wv([$t12], "CheckBox2", C, false)), "Enabled", (await $.wv([$t12], "true", C, false)));
    await $.mset((await $.wv([$t12], "DateTimePicker4", C, false)), "Enabled", (await $.wv([$t12], "true", C, false)));
    await $.mset((await $.wv([$t12], "DBDateTimeEditEh3", C, false)), "Enabled", (await $.wv([$t12], "true", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("Prolongation", async function Prolongation(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t13 = (await $.v(C, "Customer_new"));
    await $.mset((await $.wv([$t13], "Edit31", C, false)), "Visible", (await $.wv([$t13], "False", C, false)));
    await $.mset((await $.wv([$t13], "Edit32", C, false)), "Text", "1");
    await $.mset((await $.wv([$t13], "Button3", C, false)), "Enabled", (await $.wv([$t13], "False", C, false)));
    await $.mset((await $.wv([$t13], "Edit2", C, false)), "enabled", (await $.wv([$t13], "False", C, false)));
    await $.mset((await $.wv([$t13], "Edit3", C, false)), "Enabled", (await $.wv([$t13], "False", C, false)));
    await $.mset((await $.wv([$t13], "Edit4", C, false)), "Enabled", (await $.wv([$t13], "False", C, false)));
    await $.mset((await $.wv([$t13], "Edit5", C, false)), "Enabled", (await $.wv([$t13], "False", C, false)));
    await $.mset((await $.wv([$t13], "Edit6", C, false)), "Enabled", (await $.wv([$t13], "False", C, false)));
    await $.mset((await $.wv([$t13], "Edit9", C, false)), "Enabled", (await $.wv([$t13], "False", C, false)));
    await $.mset((await $.wv([$t13], "Edit12", C, false)), "Enabled", (await $.wv([$t13], "False", C, false)));
    await $.mset((await $.wv([$t13], "DBDateTimeEditEh4", C, false)), "Enabled", (await $.wv([$t13], "False", C, false)));
    await $.mset((await $.wv([$t13], "cardnumber", C, false)), "Enabled", (await $.wv([$t13], "False", C, false)));
    await $.mset((await $.wv([$t13], "ComboBox6", C, false)), "Enabled", (await $.wv([$t13], "False", C, false)));
    await $.mset((await $.wv([$t13], "CheckBox2", C, false)), "Enabled", (await $.wv([$t13], "true", C, false)));
    await $.mset((await $.wv([$t13], "DateTimePicker4", C, false)), "Enabled", (await $.wv([$t13], "true", C, false)));
    await $.mset((await $.wv([$t13], "DBDateTimeEditEh3", C, false)), "Enabled", (await $.wv([$t13], "False", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ReplaceCard", async function ReplaceCard(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t14 = (await $.v(C, "Customer_new"));
    await $.mset((await $.wv([$t14], "Edit31", C, false)), "Visible", (await $.wv([$t14], "False", C, false)));
    await $.mset((await $.wv([$t14], "Edit32", C, false)), "Text", "1");
    await $.mset((await $.wv([$t14], "Button3", C, false)), "Enabled", (await $.wv([$t14], "True", C, false)));
    await $.mset((await $.wv([$t14], "Edit2", C, false)), "enabled", (await $.wv([$t14], "true", C, false)));
    await $.mset((await $.wv([$t14], "Edit3", C, false)), "Enabled", (await $.wv([$t14], "true", C, false)));
    await $.mset((await $.wv([$t14], "Edit4", C, false)), "Enabled", (await $.wv([$t14], "true", C, false)));
    await $.mset((await $.wv([$t14], "Edit5", C, false)), "Enabled", (await $.wv([$t14], "true", C, false)));
    await $.mset((await $.wv([$t14], "Edit6", C, false)), "Enabled", (await $.wv([$t14], "true", C, false)));
    await $.mset((await $.wv([$t14], "Edit9", C, false)), "Enabled", (await $.wv([$t14], "true", C, false)));
    await $.mset((await $.wv([$t14], "Edit12", C, false)), "Enabled", (await $.wv([$t14], "true", C, false)));
    await $.mset((await $.wv([$t14], "DBDateTimeEditEh4", C, false)), "Enabled", (await $.wv([$t14], "true", C, false)));
    await $.mset((await $.wv([$t14], "cardnumber", C, false)), "Enabled", (await $.wv([$t14], "true", C, false)));
    await $.mset((await $.wv([$t14], "ComboBox6", C, false)), "Enabled", (await $.wv([$t14], "true", C, false)));
    await $.mset((await $.wv([$t14], "CheckBox2", C, false)), "Enabled", (await $.wv([$t14], "true", C, false)));
    await $.mset((await $.wv([$t14], "DateTimePicker4", C, false)), "Enabled", (await $.wv([$t14], "true", C, false)));
    await $.mset((await $.wv([$t14], "DBDateTimeEditEh3", C, false)), "Enabled", (await $.wv([$t14], "true", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("CreditLimit", async function CreditLimit(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t15 = (await $.v(C, "Customer_new"));
    await $.mset((await $.wv([$t15], "Edit31", C, false)), "Visible", (await $.wv([$t15], "False", C, false)));
    await $.mset((await $.wv([$t15], "Edit32", C, false)), "Text", "1");
    await $.mset((await $.wv([$t15], "Button3", C, false)), "Enabled", (await $.wv([$t15], "True", C, false)));
    await $.mset((await $.wv([$t15], "Edit2", C, false)), "enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Edit3", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Edit4", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Edit5", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Edit6", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Edit9", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "Edit12", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "DBDateTimeEditEh4", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "cardnumber", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "ComboBox6", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "CheckBox2", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "DateTimePicker4", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
    await $.mset((await $.wv([$t15], "DBDateTimeEditEh3", C, false)), "Enabled", (await $.wv([$t15], "true", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("CardStatus", async function CardStatus(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t16 = (await $.v(C, "Customer_new"));
    await $.mset((await $.wv([$t16], "Edit31", C, false)), "Visible", (await $.wv([$t16], "False", C, false)));
    await $.mset((await $.wv([$t16], "Edit32", C, false)), "Text", "1");
    await $.mset((await $.wv([$t16], "Button3", C, false)), "Enabled", (await $.wv([$t16], "True", C, false)));
    await $.mset((await $.wv([$t16], "Edit2", C, false)), "enabled", (await $.wv([$t16], "true", C, false)));
    await $.mset((await $.wv([$t16], "Edit3", C, false)), "Enabled", (await $.wv([$t16], "true", C, false)));
    await $.mset((await $.wv([$t16], "Edit4", C, false)), "Enabled", (await $.wv([$t16], "true", C, false)));
    await $.mset((await $.wv([$t16], "Edit5", C, false)), "Enabled", (await $.wv([$t16], "true", C, false)));
    await $.mset((await $.wv([$t16], "Edit6", C, false)), "Enabled", (await $.wv([$t16], "true", C, false)));
    await $.mset((await $.wv([$t16], "Edit9", C, false)), "Enabled", (await $.wv([$t16], "true", C, false)));
    await $.mset((await $.wv([$t16], "Edit12", C, false)), "Enabled", (await $.wv([$t16], "true", C, false)));
    await $.mset((await $.wv([$t16], "DBDateTimeEditEh4", C, false)), "Enabled", (await $.wv([$t16], "true", C, false)));
    await $.mset((await $.wv([$t16], "cardnumber", C, false)), "Enabled", (await $.wv([$t16], "true", C, false)));
    await $.mset((await $.wv([$t16], "ComboBox6", C, false)), "Enabled", (await $.wv([$t16], "true", C, false)));
    await $.mset((await $.wv([$t16], "CheckBox2", C, false)), "Enabled", (await $.wv([$t16], "true", C, false)));
    await $.mset((await $.wv([$t16], "DateTimePicker4", C, false)), "Enabled", (await $.wv([$t16], "true", C, false)));
    await $.mset((await $.wv([$t16], "DBDateTimeEditEh3", C, false)), "Enabled", (await $.wv([$t16], "true", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("ContractClose", async function ContractClose(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t17 = (await $.v(C, "Customer_new"));
    await $.mset((await $.wv([$t17], "Edit31", C, false)), "Visible", (await $.wv([$t17], "False", C, false)));
    await $.mset((await $.wv([$t17], "Edit32", C, false)), "Text", "1");
    await $.mset((await $.wv([$t17], "Button3", C, false)), "Enabled", (await $.wv([$t17], "True", C, false)));
    await $.mset((await $.wv([$t17], "Edit2", C, false)), "enabled", (await $.wv([$t17], "true", C, false)));
    await $.mset((await $.wv([$t17], "Edit3", C, false)), "Enabled", (await $.wv([$t17], "true", C, false)));
    await $.mset((await $.wv([$t17], "Edit4", C, false)), "Enabled", (await $.wv([$t17], "true", C, false)));
    await $.mset((await $.wv([$t17], "Edit5", C, false)), "Enabled", (await $.wv([$t17], "true", C, false)));
    await $.mset((await $.wv([$t17], "Edit6", C, false)), "Enabled", (await $.wv([$t17], "true", C, false)));
    await $.mset((await $.wv([$t17], "Edit9", C, false)), "Enabled", (await $.wv([$t17], "true", C, false)));
    await $.mset((await $.wv([$t17], "Edit12", C, false)), "Enabled", (await $.wv([$t17], "true", C, false)));
    await $.mset((await $.wv([$t17], "DBDateTimeEditEh4", C, false)), "Enabled", (await $.wv([$t17], "true", C, false)));
    await $.mset((await $.wv([$t17], "cardnumber", C, false)), "Enabled", (await $.wv([$t17], "true", C, false)));
    await $.mset((await $.wv([$t17], "ComboBox6", C, false)), "Enabled", (await $.wv([$t17], "true", C, false)));
    await $.mset((await $.wv([$t17], "CheckBox2", C, false)), "Enabled", (await $.wv([$t17], "true", C, false)));
    await $.mset((await $.wv([$t17], "DateTimePicker4", C, false)), "Enabled", (await $.wv([$t17], "true", C, false)));
    await $.mset((await $.wv([$t17], "DBDateTimeEditEh3", C, false)), "Enabled", (await $.wv([$t17], "true", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("PINClear", async function PINClear(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t18 = (await $.v(C, "Customer_new"));
    await $.mset((await $.wv([$t18], "Edit31", C, false)), "Visible", (await $.wv([$t18], "False", C, false)));
    await $.mset((await $.wv([$t18], "Edit32", C, false)), "Text", "1");
    await $.mset((await $.wv([$t18], "Button3", C, false)), "Enabled", (await $.wv([$t18], "True", C, false)));
    await $.mset((await $.wv([$t18], "Edit2", C, false)), "enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit3", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit4", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit5", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit6", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit9", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "Edit12", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "DBDateTimeEditEh4", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "cardnumber", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "ComboBox6", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "CheckBox2", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "DateTimePicker4", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
    await $.mset((await $.wv([$t18], "DBDateTimeEditEh3", C, false)), "Enabled", (await $.wv([$t18], "true", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("RBSChange", async function RBSChange(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t19 = (await $.v(C, "Customer_new"));
    await $.mset((await $.wv([$t19], "Edit31", C, false)), "Visible", (await $.wv([$t19], "False", C, false)));
    await $.mset((await $.wv([$t19], "Edit32", C, false)), "Text", "1");
    await $.mset((await $.wv([$t19], "Button3", C, false)), "Enabled", (await $.wv([$t19], "True", C, false)));
    await $.mset((await $.wv([$t19], "Edit2", C, false)), "enabled", (await $.wv([$t19], "true", C, false)));
    await $.mset((await $.wv([$t19], "Edit3", C, false)), "Enabled", (await $.wv([$t19], "true", C, false)));
    await $.mset((await $.wv([$t19], "Edit4", C, false)), "Enabled", (await $.wv([$t19], "true", C, false)));
    await $.mset((await $.wv([$t19], "Edit5", C, false)), "Enabled", (await $.wv([$t19], "true", C, false)));
    await $.mset((await $.wv([$t19], "Edit6", C, false)), "Enabled", (await $.wv([$t19], "true", C, false)));
    await $.mset((await $.wv([$t19], "Edit9", C, false)), "Enabled", (await $.wv([$t19], "true", C, false)));
    await $.mset((await $.wv([$t19], "Edit12", C, false)), "Enabled", (await $.wv([$t19], "true", C, false)));
    await $.mset((await $.wv([$t19], "DBDateTimeEditEh4", C, false)), "Enabled", (await $.wv([$t19], "true", C, false)));
    await $.mset((await $.wv([$t19], "cardnumber", C, false)), "Enabled", (await $.wv([$t19], "true", C, false)));
    await $.mset((await $.wv([$t19], "ComboBox6", C, false)), "Enabled", (await $.wv([$t19], "true", C, false)));
    await $.mset((await $.wv([$t19], "CheckBox2", C, false)), "Enabled", (await $.wv([$t19], "true", C, false)));
    await $.mset((await $.wv([$t19], "DateTimePicker4", C, false)), "Enabled", (await $.wv([$t19], "true", C, false)));
    await $.mset((await $.wv([$t19], "DBDateTimeEditEh3", C, false)), "Enabled", (await $.wv([$t19], "true", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("CardNameChange", async function CardNameChange(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t20 = (await $.v(C, "Customer_new"));
    await $.mset((await $.wv([$t20], "Edit31", C, false)), "Visible", (await $.wv([$t20], "False", C, false)));
    await $.mset((await $.wv([$t20], "Edit32", C, false)), "Text", "1");
    await $.mset((await $.wv([$t20], "Button3", C, false)), "Enabled", (await $.wv([$t20], "True", C, false)));
    await $.mset((await $.wv([$t20], "Edit2", C, false)), "enabled", (await $.wv([$t20], "true", C, false)));
    await $.mset((await $.wv([$t20], "Edit3", C, false)), "Enabled", (await $.wv([$t20], "true", C, false)));
    await $.mset((await $.wv([$t20], "Edit4", C, false)), "Enabled", (await $.wv([$t20], "true", C, false)));
    await $.mset((await $.wv([$t20], "Edit5", C, false)), "Enabled", (await $.wv([$t20], "true", C, false)));
    await $.mset((await $.wv([$t20], "Edit6", C, false)), "Enabled", (await $.wv([$t20], "true", C, false)));
    await $.mset((await $.wv([$t20], "Edit9", C, false)), "Enabled", (await $.wv([$t20], "true", C, false)));
    await $.mset((await $.wv([$t20], "Edit12", C, false)), "Enabled", (await $.wv([$t20], "true", C, false)));
    await $.mset((await $.wv([$t20], "DBDateTimeEditEh4", C, false)), "Enabled", (await $.wv([$t20], "true", C, false)));
    await $.mset((await $.wv([$t20], "cardnumber", C, false)), "Enabled", (await $.wv([$t20], "true", C, false)));
    await $.mset((await $.wv([$t20], "ComboBox6", C, false)), "Enabled", (await $.wv([$t20], "true", C, false)));
    await $.mset((await $.wv([$t20], "CheckBox2", C, false)), "Enabled", (await $.wv([$t20], "true", C, false)));
    await $.mset((await $.wv([$t20], "DateTimePicker4", C, false)), "Enabled", (await $.wv([$t20], "true", C, false)));
    await $.mset((await $.wv([$t20], "DBDateTimeEditEh3", C, false)), "Enabled", (await $.wv([$t20], "true", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("SecurityWordChange", async function SecurityWordChange(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t21 = (await $.v(C, "Customer_new"));
    await $.mset((await $.wv([$t21], "Edit31", C, false)), "Visible", (await $.wv([$t21], "False", C, false)));
    await $.mset((await $.wv([$t21], "Edit32", C, false)), "Text", "1");
    await $.mset((await $.wv([$t21], "Button3", C, false)), "Enabled", (await $.wv([$t21], "True", C, false)));
    await $.mset((await $.wv([$t21], "Edit2", C, false)), "enabled", (await $.wv([$t21], "true", C, false)));
    await $.mset((await $.wv([$t21], "Edit3", C, false)), "Enabled", (await $.wv([$t21], "true", C, false)));
    await $.mset((await $.wv([$t21], "Edit4", C, false)), "Enabled", (await $.wv([$t21], "true", C, false)));
    await $.mset((await $.wv([$t21], "Edit5", C, false)), "Enabled", (await $.wv([$t21], "true", C, false)));
    await $.mset((await $.wv([$t21], "Edit6", C, false)), "Enabled", (await $.wv([$t21], "true", C, false)));
    await $.mset((await $.wv([$t21], "Edit9", C, false)), "Enabled", (await $.wv([$t21], "true", C, false)));
    await $.mset((await $.wv([$t21], "Edit12", C, false)), "Enabled", (await $.wv([$t21], "true", C, false)));
    await $.mset((await $.wv([$t21], "DBDateTimeEditEh4", C, false)), "Enabled", (await $.wv([$t21], "true", C, false)));
    await $.mset((await $.wv([$t21], "cardnumber", C, false)), "Enabled", (await $.wv([$t21], "true", C, false)));
    await $.mset((await $.wv([$t21], "ComboBox6", C, false)), "Enabled", (await $.wv([$t21], "true", C, false)));
    await $.mset((await $.wv([$t21], "CheckBox2", C, false)), "Enabled", (await $.wv([$t21], "true", C, false)));
    await $.mset((await $.wv([$t21], "DateTimePicker4", C, false)), "Enabled", (await $.wv([$t21], "true", C, false)));
    await $.mset((await $.wv([$t21], "DBDateTimeEditEh3", C, false)), "Enabled", (await $.wv([$t21], "true", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("BlankOrder", async function BlankOrder(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t22 = (await $.v(C, "Customer_new"));
    await $.mset((await $.wv([$t22], "Edit31", C, false)), "Visible", (await $.wv([$t22], "False", C, false)));
    await $.mset((await $.wv([$t22], "Edit32", C, false)), "Text", "1");
    await $.mset((await $.wv([$t22], "Button3", C, false)), "Enabled", (await $.wv([$t22], "True", C, false)));
    await $.mset((await $.wv([$t22], "Edit2", C, false)), "enabled", (await $.wv([$t22], "true", C, false)));
    await $.mset((await $.wv([$t22], "Edit3", C, false)), "Enabled", (await $.wv([$t22], "true", C, false)));
    await $.mset((await $.wv([$t22], "Edit4", C, false)), "Enabled", (await $.wv([$t22], "true", C, false)));
    await $.mset((await $.wv([$t22], "Edit5", C, false)), "Enabled", (await $.wv([$t22], "true", C, false)));
    await $.mset((await $.wv([$t22], "Edit6", C, false)), "Enabled", (await $.wv([$t22], "true", C, false)));
    await $.mset((await $.wv([$t22], "Edit9", C, false)), "Enabled", (await $.wv([$t22], "true", C, false)));
    await $.mset((await $.wv([$t22], "Edit12", C, false)), "Enabled", (await $.wv([$t22], "true", C, false)));
    await $.mset((await $.wv([$t22], "DBDateTimeEditEh4", C, false)), "Enabled", (await $.wv([$t22], "true", C, false)));
    await $.mset((await $.wv([$t22], "cardnumber", C, false)), "Enabled", (await $.wv([$t22], "true", C, false)));
    await $.mset((await $.wv([$t22], "ComboBox6", C, false)), "Enabled", (await $.wv([$t22], "true", C, false)));
    await $.mset((await $.wv([$t22], "CheckBox2", C, false)), "Enabled", (await $.wv([$t22], "true", C, false)));
    await $.mset((await $.wv([$t22], "DateTimePicker4", C, false)), "Enabled", (await $.wv([$t22], "true", C, false)));
    await $.mset((await $.wv([$t22], "DBDateTimeEditEh3", C, false)), "Enabled", (await $.wv([$t22], "true", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.func("UpdateCardorBlankOrder", async function UpdateCardorBlankOrder(Self) {
  const C = $.chain(Self, U);
  const L0 = {result: undefined};
  {
    const $t23 = (await $.v(C, "Customer_new"));
    await $.mset((await $.wv([$t23], "Edit31", C, false)), "Visible", (await $.wv([$t23], "False", C, false)));
    await $.mset((await $.wv([$t23], "Edit32", C, false)), "Text", "1");
    await $.mset((await $.wv([$t23], "Button3", C, false)), "Enabled", (await $.wv([$t23], "True", C, false)));
    await $.mset((await $.wv([$t23], "Edit2", C, false)), "enabled", (await $.wv([$t23], "true", C, false)));
    await $.mset((await $.wv([$t23], "Edit3", C, false)), "Enabled", (await $.wv([$t23], "true", C, false)));
    await $.mset((await $.wv([$t23], "Edit4", C, false)), "Enabled", (await $.wv([$t23], "true", C, false)));
    await $.mset((await $.wv([$t23], "Edit5", C, false)), "Enabled", (await $.wv([$t23], "true", C, false)));
    await $.mset((await $.wv([$t23], "Edit6", C, false)), "Enabled", (await $.wv([$t23], "true", C, false)));
    await $.mset((await $.wv([$t23], "Edit9", C, false)), "Enabled", (await $.wv([$t23], "true", C, false)));
    await $.mset((await $.wv([$t23], "Edit12", C, false)), "Enabled", (await $.wv([$t23], "true", C, false)));
    await $.mset((await $.wv([$t23], "DBDateTimeEditEh4", C, false)), "Enabled", (await $.wv([$t23], "true", C, false)));
    await $.mset((await $.wv([$t23], "cardnumber", C, false)), "Enabled", (await $.wv([$t23], "true", C, false)));
    await $.mset((await $.wv([$t23], "ComboBox6", C, false)), "Enabled", (await $.wv([$t23], "true", C, false)));
    await $.mset((await $.wv([$t23], "CheckBox2", C, false)), "Enabled", (await $.wv([$t23], "true", C, false)));
    await $.mset((await $.wv([$t23], "DateTimePicker4", C, false)), "Enabled", (await $.wv([$t23], "true", C, false)));
    await $.mset((await $.wv([$t23], "DBDateTimeEditEh3", C, false)), "Enabled", (await $.wv([$t23], "true", C, false)));
  }
  return L0.result;
}, {"params": [], "kind": "procedure", "ptypes": []});
  U.method("TCustomer_new", "ComboBox9Click", async function ComboBox9Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "Suppl.Card"))) {
    await $.stmt($.call(C, "SupplCard", []));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "Prolongation"))) {
    await $.stmt($.call(C, "Prolongation", []));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "Replace Card"))) {
    await $.stmt($.call(C, "ReplaceCard", []));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "Credit Limit"))) {
    await $.stmt($.call(C, "CreditLimit", []));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "Card Status"))) {
    await $.stmt($.call(C, "CardStatus", []));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "Contract Close"))) {
    await $.stmt($.call(C, "ContractClose", []));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "PIN Clear"))) {
    await $.stmt($.call(C, "PINClear", []));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "RBS Change"))) {
    await $.stmt($.call(C, "RBSChange", []));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "CardName Change"))) {
    await $.stmt($.call(C, "CardNameChange", []));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "Security Word Change"))) {
    await $.stmt($.call(C, "SecurityWordChange", []));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "Blank Order"))) {
    await $.stmt($.call(C, "BlankOrder", []));
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "ComboBox9")), "Text")), "Update Card or Blank Order"))) {
    await $.stmt($.call(C, "UpdateCardorBlankOrder", []));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "ComboBox2Enter", async function ComboBox2Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "z": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ComboBox2")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "First", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox2")), "ItemIndex")), 0))) {
    { const $t24 = (await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "RecordCount"));
      L0["z"] = 0;
      let $t25 = true;
      for (;;) {
        if (!$t25) { L0["z"] = $.succ(L0["z"], 1); }
        $t25 = false;
        if (!($.ord(L0["z"]) <= $.ord($t24))) break;
        if ($.truthy($.eq(L0["z"], 0))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox2")), "Items")), "add", [" "])));
        } else {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox2")), "Items")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "fieldbyname", ["COMPANY_NAME"])), "asstring"))])));
          await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "next", []);
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "ComboBox9Enter", async function ComboBox9Enter(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0};
  await $.fixArgs(L0, ["sender"]);
  await $.mcall((await $.v(C, "ComboBox9")), "Clear", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "Close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "First", []);
  if ($.truthy($.ne((await $.mv((await $.v(C, "ComboBox9")), "ItemIndex")), 0))) {
    { const $t26 = (await $.mv((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "recordcount"));
      L0["i"] = 0;
      let $t27 = true;
      for (;;) {
        if (!$t27) { L0["i"] = $.succ(L0["i"], 1); }
        $t27 = false;
        if (!($.ord(L0["i"]) <= $.ord($t26))) break;
        if ($.truthy($.eq(L0["i"], 0))) {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox9")), "Items")), "add", [" "])));
        } else {
          await $.stmt((await $.mcall((await $.mv((await $.v(C, "ComboBox9")), "Items")), "add", [(await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "fieldbyname", ["TYPE"])), "asstring"))])));
          await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "apptype")), "next", []);
        }
        await $.tick();
      }
    }
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "FormShow", async function FormShow(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined, "i": 0, "z": 0, "acc": ''};
  await $.fixArgs(L0, ["sender"]);
  if ($.truthy($.eq((await $.mv((await $.v(C, "edit1")), "Text")), "NEW"))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "Close", []);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "COMPANY")), "Open", []);
    await $.mset((await $.v(C, "Button3")), "Enabled", false);
    await $.mset((await $.v(C, "Button5")), "Enabled", false);
    await $.mset((await $.v(C, "DBEdit11")), "Text", "");
    await $.mset((await $.v(C, "DBEdit3")), "Text", "");
    await $.mset((await $.v(C, "dbedit18")), "Text", "");
    await $.mset((await $.v(C, "DateTimePicker5")), "DateTime", (await $.v(C, "Date")));
    await $.mset((await $.v(C, "DateTimePicker8")), "DateTime", $.add((await $.v(C, "Date")), 365));
    await $.mset((await $.v(C, "DateTimePicker6")), "DateTime", (await $.mv((await $.v(C, "DateTimePicker8")), "DateTime")));
    await $.stmt((await $.call(C, "ActivateKeyboardLayout", [(await $.call(C, "LoadKeyboardLayout", ["00000409", 0])), 0])));
    await $.mset((await $.v(C, "ComboBox11")), "ItemIndex", 0);
    await $.mset((await $.v(C, "ComboBox12")), "ItemIndex", 0);
    await $.mset((await $.v(C, "ComboBox5")), "ItemIndex", 0);
    await $.mset((await $.v(C, "ComboBox4")), "ItemIndex", 0);
    await $.mset((await $.v(C, "edit14")), "Text", "");
    await $.mset((await $.v(C, "DBEdit4")), "Visible", true);
    await $.mset((await $.v(C, "Edit28")), "Visible", false);
    await $.mset((await $.v(C, "Edit15")), "Visible", true);
    await $.mset((await $.v(C, "Edit16")), "Visible", true);
    await $.mset((await $.v(C, "Edit17")), "Visible", true);
    await $.mset((await $.v(C, "Edit27")), "Visible", true);
    await $.mset((await $.v(C, "Edit18")), "Visible", true);
    await $.mset((await $.v(C, "Edit20")), "Visible", true);
    await $.mset((await $.v(C, "Edit21")), "Visible", true);
    await $.mset((await $.v(C, "Edit19")), "Visible", true);
    await $.mset((await $.v(C, "Edit22")), "Visible", true);
    await $.mset((await $.v(C, "DBLookupComboBox10")), "Visible", true);
    await $.mset((await $.v(C, "ComboBox5")), "Visible", true);
    await $.mset((await $.v(C, "ComboBox4")), "Visible", true);
    await $.mset((await $.v(C, "Edit26")), "Visible", true);
    await $.mset((await $.v(C, "Edit25")), "Visible", true);
    await $.mset((await $.v(C, "Edit24")), "Visible", true);
    await $.mset((await $.v(C, "Edit23")), "Visible", true);
    await $.mset((await $.v(C, "ComboBox2")), "Visible", true);
  }
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "clienapp")), "close", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "clienapp")), "open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "CUSTINFO")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "custaccount")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "valuta")), "Open", []);
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "allclientdepozits")), "close", []);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "allclientdepozits")), "SetVariable", ["HESAB", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["rbsnumber"])), "asstring"))])));
  await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "allclientcredits")), "Open", []);
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1")), "Text")), "NEW"))) {
    await $.mset((await $.v(C, "Edit2")), "Text", "");
    await $.mset((await $.v(C, "Edit3")), "Text", "");
    await $.mset((await $.v(C, "Edit4")), "Text", "");
    await $.mset((await $.v(C, "Edit5")), "Text", "");
    await $.mset((await $.v(C, "Edit6")), "Text", "");
    await $.mset((await $.v(C, "Edit9")), "Text", "");
    await $.mset((await $.v(C, "Edit12")), "Text", "");
    await $.mset((await $.v(C, "ComboBox2")), "Visible", true);
    await $.mset((await $.v(C, "DateTimePicker7")), "Visible", true);
    await $.mset((await $.v(C, "DateTimePicker8")), "Visible", true);
    await $.mset((await $.v(C, "DBLookupComboBox10")), "Visible", true);
    await $.mset((await $.v(C, "DBLookupComboBox4")), "Visible", false);
    await $.mset((await $.v(C, "DBGrid1")), "Enabled", false);
    await $.mset((await $.v(C, "DBEDIT1")), "VISIBLE", false);
    await $.mset((await $.v(C, "EDIT14")), "VISIBLE", true);
    await $.mset((await $.v(C, "DBEDIT2")), "VISIBLE", true);
    await $.mset((await $.v(C, "DBEdit18")), "Visible", false);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "VISIBLE", true);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "VISIBLE", false);
    await $.mset((await $.v(C, "Edit29")), "Visible", false);
    await $.mset((await $.v(C, "DBEDIT4")), "VISIBLE", false);
    await $.mset((await $.v(C, "EDIT28")), "VISIBLE", true);
    await $.mset((await $.v(C, "COMBOBOX10")), "VISIBLE", true);
    await $.mset((await $.v(C, "COMBOBOX11")), "VISIBLE", true);
    await $.mset((await $.v(C, "DBLookupComboBox2")), "VISIBLE", false);
    await $.mset((await $.v(C, "COMBOBOX12")), "VISIBLE", true);
    await $.mset((await $.v(C, "Edit25")), "Visible", true);
    await $.mset((await $.v(C, "ComboBox4")), "Visible", true);
    await $.mset((await $.v(C, "ComboBox6")), "Visible", false);
    await $.mset((await $.v(C, "DBEdit9")), "Visible", true);
    await $.mset((await $.v(C, "Edit2")), "Visible", false);
    await $.mset((await $.v(C, "Edit3")), "Visible", false);
    await $.mset((await $.v(C, "Edit4")), "Visible", false);
    await $.mset((await $.v(C, "Edit5")), "Visible", false);
    await $.mset((await $.v(C, "Edit6")), "Visible", false);
    await $.mset((await $.v(C, "Edit9")), "Visible", false);
    await $.mset((await $.v(C, "Edit12")), "Visible", false);
    await $.mset((await $.v(C, "DateTimePicker4")), "Visible", false);
    await $.mset((await $.v(C, "EDIT27")), "Visible", true);
    await $.mset((await $.v(C, "EDIT17")), "Visible", true);
    await $.mset((await $.v(C, "EDIT4")), "Visible", false);
    await $.mset((await $.v(C, "EDIT5")), "Visible", false);
  }
  if ($.truthy($.eq((await $.mv((await $.v(C, "Edit1")), "Text")), "EDIT"))) {
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cariqaliq")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cariqaliq")), "SetVariable", ["acc_id", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "fieldbyname", ["ACCID"])), "asinteger"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cariqaliq")), "Open", []);
    await $.mset((await $.v(C, "ComboBox2")), "Visible", false);
    await $.mset((await $.v(C, "DateTimePicker7")), "Visible", false);
    await $.mset((await $.v(C, "DateTimePicker8")), "Visible", false);
    await $.mset((await $.v(C, "DBLookupComboBox10")), "Visible", false);
    await $.mset((await $.v(C, "DBLookupComboBox4")), "Visible", true);
    await $.mset((await $.v(C, "DBGrid1")), "Enabled", true);
    await $.mset((await $.v(C, "DBEDIT1")), "VISIBLE", true);
    await $.mset((await $.v(C, "EDIT14")), "VISIBLE", false);
    await $.mset((await $.v(C, "DBEDIT2")), "VISIBLE", false);
    await $.mset((await $.v(C, "DBEdit18")), "Visible", true);
    await $.mset((await $.v(C, "DBLookupComboBox6")), "VISIBLE", false);
    await $.mset((await $.v(C, "DBLookupComboBox1")), "VISIBLE", true);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "editval")), "Close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "editval")), "SetVariable", ["RBSNUMBER", (await $.mv((await $.v(C, "DBLookupComboBox1")), "text"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "editval")), "Open", []);
    await $.mset((await $.v(C, "Edit29")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "editval")), "fieldbyname", ["VAL_NAME"])), "asstring")));
    await $.mset((await $.v(C, "Edit29")), "Visible", true);
    await $.mset((await $.v(C, "DBEDIT4")), "VISIBLE", true);
    await $.mset((await $.v(C, "EDIT28")), "VISIBLE", false);
    await $.mset((await $.v(C, "COMBOBOX10")), "VISIBLE", false);
    await $.mset((await $.v(C, "COMBOBOX11")), "VISIBLE", false);
    await $.mset((await $.v(C, "DBLookupComboBox2")), "VISIBLE", true);
    await $.mset((await $.v(C, "COMBOBOX12")), "VISIBLE", false);
    await $.mset((await $.v(C, "Edit25")), "Visible", false);
    await $.mset((await $.v(C, "ComboBox4")), "Visible", false);
    await $.mset((await $.v(C, "ComboBox6")), "Visible", true);
    if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["RESIDENT"])), "AsString")), "RESIDENT"))) {
      await $.mset((await $.v(C, "ComboBox6")), "ItemIndex", 0);
    } else {
      await $.mset((await $.v(C, "ComboBox6")), "ItemIndex", 1);
    }
    await $.mset((await $.v(C, "DBEdit9")), "Visible", false);
    await $.mset((await $.v(C, "Edit2")), "Visible", true);
    await $.mset((await $.v(C, "Edit3")), "Visible", true);
    await $.mset((await $.v(C, "Edit4")), "Visible", true);
    await $.mset((await $.v(C, "Edit5")), "Visible", true);
    await $.mset((await $.v(C, "Edit6")), "Visible", true);
    await $.mset((await $.v(C, "Edit9")), "Visible", true);
    await $.mset((await $.v(C, "Edit12")), "Visible", true);
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "SetVariable", ["numb", (await $.mv((await $.v(C, "DBLookupComboBox1")), "text"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "Open", []);
    await $.mset((await $.v(C, "DateTimePicker4")), "Visible", true);
    await $.mset((await $.v(C, "EDIT27")), "Visible", false);
    await $.mset((await $.v(C, "EDIT17")), "Visible", false);
    await $.mset((await $.v(C, "EDIT4")), "Visible", true);
    await $.mset((await $.v(C, "EDIT5")), "Visible", true);
    if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["urg"])), "asinteger")), 0))) {
      await $.mset((await $.v(C, "CheckBox2")), "Checked", true);
    } else {
      await $.mset((await $.v(C, "CheckBox2")), "Checked", false);
    }
    await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["FNAME"])), "AsString")));
    await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["LNAME"])), "AsString")));
    await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["HOMEPHONE"])), "AsString")));
    await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["WORKPHONE"])), "AsString")));
    await $.mset((await $.v(C, "Edit6")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["PASSPORT"])), "AsString")));
    await $.mset((await $.v(C, "Edit9")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["REFERENCE"])), "AsString")));
    await $.mset((await $.v(C, "Edit12")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["CITY"])), "AsString")));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "close", []);
    await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "SetVariable", ["numb", (await $.mv((await $.v(C, "DBLookupComboBox1")), "text"))])));
    await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "Open", []);
    await $.mset((await $.v(C, "DateTimePicker4")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "Clients")), "FieldByName", ["EXPIRY"])), "AsDATETIME")));
  }
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  U.method("TCustomer_new", "DBGrid5CellClick", async function DBGrid5CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "Edit31")), "Visible", false);
  await $.mset((await $.v(C, "Edit32")), "Text", "1");
  await $.mset((await $.v(C, "Button3")), "Enabled", true);
  await $.mset((await $.v(C, "Edit2")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["FNAME"])), "AsString")));
  await $.mset((await $.v(C, "Edit3")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["LNAME"])), "AsString")));
  await $.mset((await $.v(C, "Edit4")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["HOMEPHONE"])), "AsString")));
  await $.mset((await $.v(C, "Edit5")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["WORKPHONE"])), "AsString")));
  await $.mset((await $.v(C, "Edit6")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["PASSPORT"])), "AsString")));
  await $.mset((await $.v(C, "Edit9")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["REFERENCE"])), "AsString")));
  await $.mset((await $.v(C, "Edit12")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["CITY"])), "AsString")));
  await $.mset((await $.v(C, "DBDateTimeEditEh4")), "DataSource", (await $.mv((await $.v(C, "DataMod_CARDS")), "clientappsource")));
  await $.mset((await $.v(C, "DBDateTimeEditEh4")), "DataField", "BIRTHDAY");
  await $.mset((await $.v(C, "cardnumber")), "DataSource", (await $.mv((await $.v(C, "DataMod_CARDS")), "clientappsource")));
  await $.mset((await $.v(C, "cardnumber")), "DataField", "CARDNUMBER");
  await $.mset((await $.v(C, "DBLookupComboBox4")), "DataSource", (await $.mv((await $.v(C, "DataMod_CARDS")), "clientappsource")));
  await $.mset((await $.v(C, "DBLookupComboBox4")), "DataField", "CARDTYPE");
  await $.mset((await $.v(C, "DBLookupComboBox4")), "Visible", false);
  await $.mset((await $.v(C, "Edit30")), "Text", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["CARDTYPE"])), "AsString")));
  await $.mset((await $.v(C, "Edit30")), "Visible", true);
  if ($.truthy($.eq((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["RESIDENT"])), "AsString")), "RESIDENT"))) {
    await $.mset((await $.v(C, "ComboBox6")), "ItemIndex", 0);
  } else {
    await $.mset((await $.v(C, "ComboBox6")), "ItemIndex", 1);
  }
  if ($.truthy($.ne((await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["urg"])), "asinteger")), 0))) {
    await $.mset((await $.v(C, "CheckBox2")), "Checked", true);
  } else {
    await $.mset((await $.v(C, "CheckBox2")), "Checked", false);
  }
  await $.mset((await $.v(C, "DateTimePicker4")), "DateTime", (await $.mv((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "cliencards")), "FieldByName", ["EXPIRY"])), "AsDATETIME")));
  await $.mset((await $.v(C, "DBDateTimeEditEh3")), "DataSource", (await $.mv((await $.v(C, "DataMod_CARDS")), "clientcardssource")));
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCustomer_new", "DBGrid6CellClick", async function DBGrid6CellClick(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"column": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["column"]);
  await $.mset((await $.v(C, "Edit31")), "Visible", true);
  await $.mset((await $.v(C, "Edit32")), "Text", "2");
  await $.mset((await $.v(C, "Button3")), "Enabled", true);
  return L0.result;
}, {"params": ["Column"], "kind": "procedure", "ptypes": ["TColumn"]});
  U.method("TCustomer_new", "FormClose", async function FormClose(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "action": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.mset((await $.v(C, "ComboBox9")), "Enabled", false);
  return L0.result;
}, {"params": ["Sender", "Action"], "kind": "procedure", "ptypes": ["TObject", "TCloseAction"]});
  U.method("TCustomer_new", "ComboBox9KeyPress", async function ComboBox9KeyPress(Self, p0, p1) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), "key": $.asRef(p1), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await L0["key"].set("\u0000");
  return L0.result;
}, {"params": ["Sender", "Key"], "kind": "procedure", "ptypes": ["TObject", "Char"]});
  U.method("TCustomer_new", "Button5Click", async function Button5Click(Self, p0) {
  const C = $.chain(Self, U);
  const L0 = {"sender": $.copyArg(p0), result: undefined};
  await $.fixArgs(L0, ["sender"]);
  await $.stmt((await $.mcall((await $.mv((await $.v(C, "DataMod_CARDS")), "SB_ACA")), "CallProcedure", ["CheckAdvancedObjectAccess", ["card_client_archive"]])));
  return L0.result;
}, {"params": ["Sender"], "kind": "procedure", "ptypes": ["TObject"]});
  return U;
}
